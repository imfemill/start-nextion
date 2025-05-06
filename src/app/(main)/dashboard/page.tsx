'use client';

const Dashboard = () => {
    return (
        <section className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-16 bg-gray-300 rounded"></div>
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="h-6 bg-gray-300 rounded"></div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
                    <div className="animate-pulse h-8 w-48 bg-gray-300 rounded"></div>
                    <div className="animate-pulse h-8 w-8 bg-gray-300 rounded-full"></div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="animate-pulse space-y-6">
                        <div className="h-10 bg-gray-300 rounded"></div>
                        <div className="h-64 bg-gray-300 rounded"></div>
                        <div className="h-10 bg-gray-300 rounded"></div>
                        <div className="h-32 bg-gray-300 rounded"></div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Dashboard;
