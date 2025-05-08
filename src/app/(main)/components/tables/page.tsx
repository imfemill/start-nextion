'use client';

import CommonSearchInput from '@/common/CommonSearchInput';
import CommonTableSkeleton from '@/common/CommonTableSkeleton';
import PaginationComponent from '@/components/PaginationComponent';
import ReactTableComponent from '@/components/ReactTableComponent';
import MoreText from '@/components/ViewMoreComponent';
import React, { useState } from 'react';

const Tables = () => {
    const [filter, setFilter] = useState({
        page: 1,
        limit: 10,
        status: '',
        search: '',
        sortBy: '',
        orderBy: ''
    });

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                sortable: true,
                Cell: (props: { value: string }) => <MoreText text={props.value} />
            },
            { Header: 'Age', accessor: 'age', sortable: false, align: 'center' },
            { Header: 'Email', accessor: 'email', sortable: true, align: 'center' },
            {
                Header: 'Status',
                accessor: 'status',
                sortable: true,
                align: 'center',
                Cell: (props: { value: string }) => {
                    const status = props.value;
                    return (
                        <span
                            className={`${
                                status === 'Active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            } px-2 py-1 rounded-full text-xs font-medium`}
                        >
                            {status}
                        </span>
                    );
                }
            }
        ],
        []
    );

    const data = [
        {
            name: 'John Doe lorem ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ipsumlorem ipsumlorem ipsum lorem ipsum ',
            age: 28,
            email: 'john.doe@example.com',
            status: 'Active'
        },
        { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com', status: 'Inactive' },
        { name: 'Alice Johnson', age: 25, email: 'alice.johnson@example.com', status: 'Active' }
    ];

    return false ? (
        <CommonTableSkeleton />
    ) : (
        <section className="selection-none mt-2">
            <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-primaryDark font-semibold">Companies List</h3>
                    <div className="flex items-center flex-wrap gap-2">
                        <select
                            className="border border-neutral-200 rounded px-2 py-1 text-sm active:outline-none focus:outline-none"
                            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                        >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="expired">Expired</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className="divide-y-2 divide-neutral-200">
                    <div className="py-4 px-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span>Show</span>
                            <select
                                className="border border-neutral-200 rounded px-2 py-1"
                                onChange={(e) => {
                                    setFilter({ ...filter, limit: parseInt(e.target.value) });
                                }}
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span>entries</span>
                        </div>
                        <div>
                            <CommonSearchInput
                                inputAttributes={{
                                    placeholder: 'Search...',
                                    id: '',
                                    name: '',
                                    disabled: false,
                                    defaultValue: ''
                                }}
                                isLoading={false}
                                onChange={(value) => {
                                    setFilter((prev) => ({ ...prev, search: value }));
                                }}
                            />
                        </div>
                    </div>
                    <div>
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
                            onPageChange={(page) =>
                                setFilter((prev) => ({
                                    ...prev,
                                    page
                                }))
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tables;
