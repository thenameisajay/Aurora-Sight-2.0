'use client';

import Image from 'next/image';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import type { StatusData } from '@/types/interfaces/currentStatus';
import { useQuery } from '@tanstack/react-query';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { getRelativeTime } from './utils/helpers/getRelativeTime';
import { getStatusDescription } from './utils/helpers/getStatusDescription';

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
            <div className="mt-2 flex items-center justify-center  rounded-full">
                <Image
                    src="/aurora-sight.png"
                    alt="Aurora Sight 2.0 Logo"
                    width={200}
                    height={200}
                    loading="lazy"
                />
            </div>
            <HeadBanner heading={heading} description={description} />
            <StatusCard data={data} />
        </div>
    );
}

const StatusCard = ({ data }: { data: StatusData[] }) => {
    const { status_id, datetime } = data[0];
    console.log('Status ID:', typeof status_id);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Status</CardTitle>
                <CardDescription>
                    {getStatusDescription(status_id)}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <p>
                    <span>Status ID:</span> {status_id}
                </p>
            </CardContent>
            <CardFooter>
                <p>
                    <span>Last Updated:</span>{' '}
                    {getRelativeTime(new Date(datetime))}
                </p>
            </CardFooter>
        </Card>
    );
};
