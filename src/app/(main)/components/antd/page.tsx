'use client';

import dynamic from 'next/dynamic';

const CommonDatePicker = dynamic(() => import('@/common/CommonDatePicker'));
const CommonDateRangePicker = dynamic(() => import('@/common/CommonDateRangePicker'));
const CommonSwitchableDateTimePicker = dynamic(
    () => import('@/common/CommonSwitchableDateTimePicker')
);
const LayoutTitleComponent = dynamic(() => import('@/components/LayoutTitleComponent'));

// import "antd/dist/reset.css"; // antd css

const ANTDesign = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Ant Design'
                    }
                ]}
                pageTitle="Ant Design"
            />
            <section>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col  items-start bg-white border border-light">
                        <div className="border border-light w-full p-3">
                            <h2 className="text-lg font-semibold text-secondary">Date Picker</h2>
                        </div>
                        <div className="flex gap-5 p-5 border border-light w-full">
                            <CommonDatePicker />
                        </div>
                    </div>
                    <div className="flex flex-col  items-start bg-white border border-light">
                        <div className="border border-light w-full p-3">
                            <h2 className="text-lg font-semibold text-secondary">
                                Date Range Picker
                            </h2>
                        </div>
                        <div className="flex gap-5 flex-wrap p-5 border border-light w-full">
                            <CommonDateRangePicker />
                            <CommonSwitchableDateTimePicker />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ANTDesign;
