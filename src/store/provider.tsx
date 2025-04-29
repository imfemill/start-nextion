'use client';

import { Provider } from 'react-redux';
import { rtkStore } from './store';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
    return <Provider store={rtkStore}>{children}</Provider>;
}
