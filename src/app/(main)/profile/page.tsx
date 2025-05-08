'use client';

import ProfileComponent from './_components/ProfileComponent';
import ChangePasswordComponent from './_components/ChangePasswordComponent';

const Profile = () => {
    return (
        <section className="selection-none mt-2 flex flex-col gap-4">
            <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                <ProfileComponent />
            </div>
            <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                <ChangePasswordComponent />
            </div>
        </section>
    );
};

export default Profile;
