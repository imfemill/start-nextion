'use client';

import CommonDatePicker from '@/common/CommonDatePicker';
import CommonDateRangePicker from '@/common/CommonDateRangePicker';
import CommonSwitchableDateTimePicker from '@/common/CommonSwitchableDateTimePicker';

// import "antd/dist/reset.css"; // antd css

const Dashboard = () => {
    return (
        <main className="p-5 h-screen">
            <section className="bg-light h-full p-5">
                <div className="p-5 gap-5 flex flex-col">
                    <h1 className="text-2xl font-bold text-primaryDark">Ant Designs</h1>
                    <div className="grid grid-cols-4">
                        <div className="flex flex-col  items-start bg-white border border-light">
                            <div className="border border-light w-full p-3">
                                <h2 className="text-lg font-semibold text-secondary">
                                    Date Picker
                                </h2>
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
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
