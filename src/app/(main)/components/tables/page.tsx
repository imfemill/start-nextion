'use client';

import PaginationComponent from '@/components/PaginationComponent';
import ReactTableComponent from '@/components/ReactTableComponent';
import React, { useState } from 'react';

const Tables = () => {
    const [filter, setFilter] = useState({
        status: '',
        search: '',
        sortBy: '',
        orderBy: ''
    });

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name', sortable: true },
            { Header: 'Age', accessor: 'age', sortable: false },
            { Header: 'Email', accessor: 'email', sortable: true }
        ],
        []
    );

    const data = [
        { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
        { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
        { name: 'Alice Johnson', age: 25, email: 'alice.johnson@example.com' }
    ];

    return (
        <section className="selection-none mt-2">
            <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white">
                <div className="py-4 px-5 border-b border-neutral-200 flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-secondaryDark font-semibold">Companies List</h3>
                    <div className="flex items-center flex-wrap gap-2">
                        <select className="border border-neutral-200 rounded px-2 py-1 text-sm active:outline-none focus:outline-none">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="expired">Expired</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className="divide-y-0 divide-neutral-200">
                    <div className="py-4 px-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span>Show</span>
                            <select className="border border-neutral-200 rounded px-2 py-1">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span>entries</span>
                        </div>
                        <div>
                            <input
                                type="search"
                                placeholder="Search..."
                                className="border border-neutral-200 rounded text-sm px-2 py-1 w-[200px]"
                            />
                        </div>
                    </div>
                    <div className="">
                        <ReactTableComponent
                            columns={columns}
                            data={data}
                            handleSort={(sortedField, orderBy) => {
                                setFilter((prev) => ({
                                    ...prev,
                                    sortBy: sortedField,
                                    orderBy: orderBy
                                }));
                            }}
                            sortBy={filter?.sortBy}
                            orderBy={filter?.orderBy}
                        />
                    </div>
                    <div className="py-4 px-5">
                        <PaginationComponent
                            totalItems={97}
                            itemsPerPage={10}
                            onPageChange={(page) => console.warn('Page changed to:', page)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tables;
