import React from 'react';
const CommonButton = dynamic(() => import('@/common/CommonButton'));
const LayoutTitleComponent = dynamic(() => import('@/components/LayoutTitleComponent'));
import { PRIMARY, SECONDARY, OUTLINED } from '@/lib/constants';
import dynamic from 'next/dynamic';

const Buttons = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Buttons'
                    }
                ]}
                pageTitle="Common Buttons"
            />
            <section>
                <div className="flex flex-col items-start gap-5 w-7xl">
                    <div className="flex gap-5 w-full">
                        <CommonButton type={PRIMARY}>Primary Button</CommonButton>
                        <CommonButton type={SECONDARY}>Secondary Button</CommonButton>
                        <CommonButton type={PRIMARY} rounded>
                            Rounded Primary Button
                        </CommonButton>
                        <CommonButton type={SECONDARY} rounded>
                            Rounded Secondary Button
                        </CommonButton>
                    </div>
                    <div className="flex gap-5 w-full">
                        <CommonButton type={PRIMARY} soft>
                            Soft Primary Button
                        </CommonButton>
                        <CommonButton type={SECONDARY} soft>
                            Soft Secondary Button
                        </CommonButton>
                        <CommonButton type={PRIMARY} rounded soft>
                            Soft Rounded Primary Button
                        </CommonButton>
                        <CommonButton type={SECONDARY} rounded soft>
                            Soft Rounded Secondary Button
                        </CommonButton>
                    </div>
                    <div className="flex gap-5 w-full">
                        <CommonButton type={PRIMARY} variant={OUTLINED}>
                            Outline Primary Button
                        </CommonButton>
                        <CommonButton type={SECONDARY} variant={OUTLINED}>
                            Outline Secondary Button
                        </CommonButton>
                        <CommonButton type={PRIMARY} variant={OUTLINED} rounded>
                            Rounded Outline Primary Button
                        </CommonButton>
                        <CommonButton type={SECONDARY} variant={OUTLINED} rounded>
                            Rounded Outline Secondary Button
                        </CommonButton>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Buttons;
