'use client';

import { useQuery } from '@tanstack/react-query';

import { siteActivity } from '@/api/siteActivity/siteActivity';

const refreshInterval = 150000;

export default function Page() {
    const {
        data: siteActivityData,
        isError,
        isPending,
    } = useQuery({
        queryKey: ['siteActivity'],
        queryFn: siteActivity,
        refetchInterval: refreshInterval,
    });
    console.log('Data:', siteActivityData);

    if (isPending) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <div>
            <h1>Activity Plot</h1>
        </div>
    );
}
