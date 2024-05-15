'use client';

import Image from 'next/image';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import { useQuery } from '@tanstack/react-query';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';

const heading = 'Aurora Sight 2.0';
const description = 'See the aurora borealis from the UK';

export default function Home() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['liveStatus'],
        queryFn: currentStatus,
    });

    if (isPending) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    console.log('Data:', data);

    return (
        <div>
            <div className="mt-2 flex items-center justify-center">
                <Image
                    src="/aurora-sight.png"
                    alt="Aurora Sight 2.0 Logo"
                    width={200}
                    height={200}
                />
            </div>
            <HeadBanner heading={heading} description={description} />
        </div>
    );
}
