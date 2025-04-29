'use client';

import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, TimePicker } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
    type,
    onChange
}: {
    type: PickerType;
    onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
    if (type === 'time') return <TimePicker onChange={onChange} use12Hours />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
};

const CommonSwitchableDateTimePicker: React.FC = () => {
    const [type, setType] = useState<PickerType>('time');

    return (
        <div className="flex flex-wrap gap-2">
            <Select aria-label="Picker Type" className="w-24" value={type} onChange={setType}>
                <Option value="time">Time</Option>
                <Option value="date">Date</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="quarter">Quarter</Option>
                <Option value="year">Year</Option>
            </Select>
            <PickerWithType type={type} onChange={(/* value */) => {}} />
        </div>
    );
};

export default CommonSwitchableDateTimePicker;
