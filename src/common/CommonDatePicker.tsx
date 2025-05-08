'use client';

import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import React from 'react';

const onChange: DatePickerProps['onChange'] = (/* date, dateString */) => {
    // console.log(date, dateString);
};

const CommonDatePicker: React.FC = () => (
    <div className="flex flex-wrap gap-2">
        <DatePicker
            onChange={onChange}
            format={'DD MMM, YYYY'}
            className="hover:!border-secondary selection:!border-secondary hover:border-2"
        />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
    </div>
);

export default CommonDatePicker;
