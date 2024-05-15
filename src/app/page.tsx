'use client';

import { liveStatus } from '@/api/status/status';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['liveStatus'],
        queryFn: liveStatus,
    });

    if (isPending) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    console.log('Data:', data);

    return (
        <div>
            <h1>Hello World !</h1>
        </div>
    );
}
