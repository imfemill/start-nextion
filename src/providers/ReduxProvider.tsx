'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { rtkStore } from '@/store/store';

interface Props {
    children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
    return <Provider store={rtkStore}>{children}</Provider>;
}
