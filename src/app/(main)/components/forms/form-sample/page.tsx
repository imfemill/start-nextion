import React from 'react';
import LayoutTitleComponent from '@/components/LayoutTitleComponent';

const FormSample = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Form Sample'
                    }
                ]}
                pageTitle="Form Sample"
            />
            <section className="selection-none mt-2">
                <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200 py-4 px-5">
                    Form Sample
                </div>
            </section>
        </>
    );
};

export default FormSample;
