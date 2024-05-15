'use client';

import React from 'react';

import { siteActivity } from '@/api/siteActivity/siteActivity';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['siteActivity'],
        queryFn: siteActivity,
    });

    console.log('Data:', data);

    if (isPending) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <div>
            <h1>Activity Plot</h1>
        </div>
    );
}
