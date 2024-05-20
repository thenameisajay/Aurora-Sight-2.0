'use client';

import { memo } from 'react';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import ErrorCard from '@/components/errors/ErrorCard';
import SkeletonCard from '@/components/skeletons/SkeletonCard';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { StatusData } from '@/types/interfaces/currentStatus';
import { getRelativeTime } from '@/utils/helpers/getRelativeTime';
import {
    getStatusColor,
    getStatusDescription,
} from '@/utils/helpers/getStatusInfo';

const heading = 'Aurora Sight 2.0';
const description = 'See the aurora borealis from the UK';

const StatusCard = memo(({ data }: { data: StatusData[] }) => {
    const { status_id, datetime } = data[0];
    console.log('Status ID:', typeof status_id);

    const statusColor = getStatusColor(status_id);

    const statusDescription = getStatusDescription(status_id);

    console.log('Status Description:', statusDescription);

    console.log('Status Color:', statusColor);

    return (
        <Card className="  relative mt-5  w-96 ">
            <CardHeader>
                <CardTitle className=" md:text-3xl">Status</CardTitle>
                <CardDescription className="text-base text-gray-500">
                    {statusDescription}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col">
                    <div
                        className={` flex h-14 items-center justify-center space-x-4 rounded-md border bg-[${statusColor}] p-4 text-white`}
                    >
                        <div className="flex-1 space-y-1"></div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-gray-600">
                    <span>Last Updated:</span>{' '}
                    {getRelativeTime(new Date(datetime))}
                </p>
            </CardFooter>
        </Card>
    );
});

StatusCard.displayName = 'StatusCard';

export default function Home() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['liveStatus'],
        queryFn: currentStatus,
        refetchInterval: 150000, // The status is updated every 2.5 minutes , The actual api itself updates every 3 minutes.
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center  rounded-full">
                <Image
                    src="/aurora-sight.png"
                    alt="Aurora Sight 2.0 Logo"
                    width={200}
                    height={200}
                    loading="lazy"
                />
            </div>
            <HeadBanner heading={heading} description={description} />
            {isPending ? (
                <SkeletonCard />
            ) : (
                !isError && data && <StatusCard data={data} />
            )}
            {isError && <ErrorCard />}
        </div>
    );
}
