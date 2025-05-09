import { Autocomplete, Libraries, useJsApiLoader } from '@react-google-maps/api';
import { XIcon } from 'lucide-react';
import { useRef, useState } from 'react';

// Google Maps API key and libraries
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY; // Google Maps API key
const GOOGLE_MAPS_LIBRARIES: Libraries = ['places']; // Google Maps 'places'

interface GoogleAddressSearchProps {
    name: string;
    id?: string;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (value: {
        address: string;
        location: { lat: number; lng: number } | null;
        name: string;
        formattedAddress: string;
    }) => void;
    values: string;
    placeholder: string;
    resetValue: () => void;
}

const GoogleAddressSearch = ({
    id,
    name,
    values,
    placeholder,
    handleBlur,
    handleChange,
    resetValue
}: GoogleAddressSearchProps) => {
    // Reference to the search box
    const searchBoxRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [isAddressSelected, setIsAddressSelected] = useState(false);

    // Function to handle place selection
    const handlePlacesChanged = () => {
        const places = searchBoxRef?.current?.getPlace();
        // If a valid place is selected, extract and process address components
        if (
            places?.address_components &&
            places.address_components.length > 0 &&
            places.geometry?.location
        ) {
            setIsAddressSelected(true);
            const location = places.geometry.location
                ? {
                      lat: places.geometry.location.lat(),
                      lng: places.geometry.location.lng()
                  }
                : null;
            handleChange({
                address: places.formatted_address || '',
                location: location,
                name: places.name || '',
                formattedAddress: places.formatted_address || ''
            });
        }
    };
    // Load Google Maps JavaScript API
    const { isLoaded /* , loadError */ } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY || '',
        libraries: GOOGLE_MAPS_LIBRARIES
    });

    return (
        // <LoadScript id="google-map-script" googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={GOOGLE_MAPS_LIBRARIES}>
        isLoaded ? (
            <Autocomplete
                onLoad={(ref) => (searchBoxRef.current = ref)}
                onPlaceChanged={() => {
                    handlePlacesChanged();
                }}
            >
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                    <input
                        type={'text'}
                        spellCheck={!1}
                        className={`
                            bg-white border border-light rounded-md focus-visible:outline-none 
                            text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] 
                            placeholder:text-gray-400 focus-within:border-neutral-400
                        `}
                        placeholder={placeholder}
                        aria-label={name || ''}
                        aria-describedby={`${name}-addon`}
                        id={id || ''}
                        name={name || ''}
                        value={values || ''}
                        onBlur={handleBlur}
                        onChange={(e) =>
                            handleChange({
                                address: e.target.value,
                                location: null,
                                name: '',
                                formattedAddress: ''
                            })
                        }
                        disabled={isAddressSelected}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // Prevent the default form submission
                            }
                        }}
                    />
                    {!!values?.length && (
                        <XIcon
                            className="absolute text-2xl right-2 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer hover:scale-105 hover:text-gray-900 transition-all"
                            onClick={() => {
                                setIsAddressSelected(false);
                                resetValue();
                            }}
                        />
                    )}
                </div>
            </Autocomplete>
        ) : (
            <div>
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                    <input
                        type={'text'}
                        spellCheck={!1}
                        className={`
                            bg-white border border-light rounded-md focus-visible:outline-none 
                            text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] 
                            placeholder:text-gray-400 focus-within:border-neutral-400
                        `}
                        placeholder={placeholder}
                        aria-label={name || ''}
                        aria-describedby={`${name}-addon`}
                        id={id || ''}
                        name={name || ''}
                        value={values || ''}
                        onBlur={handleBlur}
                        onChange={(e) =>
                            handleChange({
                                address: e.target.value,
                                location: null,
                                name: '',
                                formattedAddress: ''
                            })
                        }
                        disabled={isAddressSelected}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // Prevent the default form submission
                            }
                        }}
                    />
                </div>
            </div>
        )
    );
};

export default GoogleAddressSearch;
