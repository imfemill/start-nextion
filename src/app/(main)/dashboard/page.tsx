'use client';

import dynamic from 'next/dynamic';

const LayoutTitleComponent = dynamic(() => import('@/components/LayoutTitleComponent'));

const Dashboard = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Dashboard'
                    }
                ]}
                pageTitle="Dashboard"
            />

            <section className="flex h-screen">Dashboard</section>
        </>
    );
};

export default Dashboard;
