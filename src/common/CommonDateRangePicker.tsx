'use client';

import type { TimeRangePickerProps } from 'antd';
import { DatePicker } from 'antd';
// import type { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import React from 'react';

const { RangePicker } = DatePicker;

const onRangeChange = () =>
    /* dates: null | (Dayjs | null)[],
   dateStrings: string[] */
    {
        /*  if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
   } else {
      console.log("Clear");
   } */
    };

const rangePresets: TimeRangePickerProps['presets'] = [
    { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
    { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
    { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
    { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] }
];

const CommonDateRangePicker: React.FC = () => (
    <RangePicker presets={rangePresets} onChange={onRangeChange} format={'DD MMM, YYYY'} />
);

export default CommonDateRangePicker;
