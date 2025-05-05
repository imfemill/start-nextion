'use client';

import { useTable } from 'react-table';
import React, { useEffect, useState } from 'react';
import { ASC, DESC } from '@/lib/constants';

interface ReactTableComponentProps {
    columns: Array<{ Header: string; accessor: string; sortable?: boolean }>; // Table column definitions
    data: Array<Record<string, string | number | boolean | null>>; // Table data
    handleSort: (columnId: string, order: typeof ASC | typeof DESC | '') => void; // Function to handle sorting
    orderBy: typeof ASC | typeof DESC | ''; // Sorting order
    sortBy: string; // Column ID to sort by
}

const ReactTableComponent: React.FC<ReactTableComponentProps> = ({
    columns,
    data,
    sortBy,
    orderBy,
    handleSort
}) => {
    const [sortingFields, setSortingFields] = useState<string[]>([]);
    // Initialize the table instance
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<
        Record<string, string | number | boolean | null>
    >({
        columns,
        data
    });

    interface HandleHeaderClickProps {
        columnId: string;
        isDifferent: boolean;
    }

    useEffect(() => {
        setSortingFields(
            columns
                ?.filter((field) => {
                    if (field?.sortable) {
                        return field.accessor;
                    }
                })
                ?.map((field) => field.accessor)
        );
    }, [columns]);

    const handleHeaderClick = ({ columnId, isDifferent }: HandleHeaderClickProps): void => {
        if (sortingFields?.includes(columnId)) {
            const sortOrders = {
                '': ASC,
                [ASC]: DESC,
                [DESC]: ''
            };

            const nextOrder = isDifferent ? sortOrders[''] : sortOrders[orderBy] || '';
            handleSort(nextOrder ? columnId : '', nextOrder);
        }
    };

    return (
        <div className="">
            <table {...getTableProps()} className="min-w-full">
                <thead className="bg-neutral-200">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={new Date().getTime()}>
                            {headerGroup.headers.map((column, index) => (
                                <th
                                    {...column.getHeaderProps()}
                                    onClick={() =>
                                        handleHeaderClick({
                                            columnId: column.id,
                                            isDifferent: column.id !== sortBy
                                        })
                                    }
                                    key={new Date().getTime() + index}
                                    className={`px-6 text-left text-xs font-bold text-neutral-800 uppercase tracking-wider select-none py-4 ${sortingFields?.includes(column?.id) && 'cursor-pointer'}`}
                                >
                                    <div className="flex items-center">
                                        {column.render('Header')}
                                        {/* Add sorting indicators */}
                                        {sortingFields?.includes(column?.id) &&
                                        orderBy &&
                                        sortBy === column.id ? (
                                            <span className="ml-2 text-primary">
                                                {orderBy === DESC ? '▼' : '▲'}
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-neutral-200">
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        key={cell.column.id}
                                        className="px-6 py-4 text-sm text-neutral-700 break-words"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ReactTableComponent;
