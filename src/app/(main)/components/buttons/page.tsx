import CommonButton from '@/common/CommonButton';
import { PRIMARY, SECONDARY, OUTLINED } from '@/lib/constants';
import React from 'react';

const Buttons = () => {
    return (
        <main className="p-5 h-screen">
            <section className="bg-light h-full p-5">
                <div className="p-5 gap-5 flex flex-col">
                    <h1 className="text-2xl font-bold text-primaryDark">Buttons</h1>
                    <div className="flex flex-col items-start gap-5 grid-cols-3">
                        <div className="flex gap-5">
                            <CommonButton type={PRIMARY}>Primary Button</CommonButton>
                            <CommonButton type={SECONDARY}>Secondary Button</CommonButton>
                            <CommonButton type={PRIMARY} rounded>
                                Rounded Primary Button
                            </CommonButton>
                            <CommonButton type={SECONDARY} rounded>
                                Rounded Secondary Button
                            </CommonButton>
                        </div>
                        <div className="flex gap-5">
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
                        <div className="flex gap-5">
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
                </div>
            </section>
        </main>
    );
};

export default Buttons;
