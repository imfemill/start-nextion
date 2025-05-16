'use client';

import dynamic from 'next/dynamic';

import ProfileComponent from './_components/ProfileComponent';
import ChangePasswordComponent from './_components/ChangePasswordComponent';
const LayoutTitleComponent = dynamic(() => import('@/components/LayoutTitleComponent'));

const Profile = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'My Profile',
                        href: '/dashboard'
                    }
                ]}
                pageTitle="Profile"
            />
            <section className="selection-none mt-2 flex flex-col gap-4">
                <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                    <ProfileComponent />
                </div>
                <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                    <ChangePasswordComponent />
                </div>
            </section>
        </>
    );
};

export default Profile;
