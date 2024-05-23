'use client';

import { memo, useState } from 'react';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import ErrorCard from '@/components/errors/ErrorCard';
import Footer from '@/components/footer/Footer';
import SkeletonCard from '@/components/skeletons/SkeletonCard';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { StatusCardProps } from '@/types/interfaces/cardProps';
import { getRelativeTime } from '@/utils/helpers/getRelativeTime';
import {
    getStatusColor,
    getStatusDescription,
    getStatusMeaning,
} from '@/utils/helpers/getStatusInfo';

const heading = 'Aurora Sight 2.0';
const description = 'See the aurora borealis from the UK 🇬🇧';
const refreshInterval = 150000;

const Header = () => {
    return (
        <>
            <div className="sm:h-30   sm:w-30 flex h-24 w-24  items-center justify-center  rounded-full md:h-28 md:w-28 lg:h-32 lg:w-32">
                <Image
                    src="/aurora-sight.png"
                    alt="Aurora Sight 2.0 Logo"
                    width={200}
                    height={200}
                    loading="lazy"
                />
            </div>
            <HeadBanner heading={heading} description={description} />
        </>
    );
};

const StatusCard = memo(({ data, refresh, dateUpdated }: StatusCardProps) => {
    const { status_id, datetime } = data[0];

    const statusColor = getStatusColor(status_id);

    const statusDescription = getStatusDescription(status_id);

    const statusMeaning = getStatusMeaning(status_id);

    return (
        <Card className="  relative mx-4 mt-3 overflow-y-scroll  md:w-96 ">
            <CardHeader>
                <CardTitle className=" text-1xl md:text-3xl">Status</CardTitle>
                <CardDescription className="text-gray-500 md:text-base">
                    {statusDescription}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col">
                    <div
                        className={` flex h-14 items-center justify-center space-x-4 rounded-md border  p-4 text-white`}
                        style={{ backgroundColor: statusColor }} // Forcefully added the style prop , as the dynamic class prop via Tailwind was not working.
                    >
                        <div className="flex-1 space-y-1"></div>
                    </div>
                </div>
                <div className="  flex w-full items-center justify-center  text-center">
                    <p className="mt-2 text-sm text-gray-600 md:text-base">
                        {statusMeaning}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex w-full flex-col">
                <Button onClick={refresh} className="my-1">
                    Refresh
                </Button>
                <div className="flex flex-col items-center justify-center ">
                    <p className="mt-2  text-xs text-gray-600 md:text-sm">
                        <span>API Last Updated:</span>{' '}
                        {getRelativeTime(new Date(datetime))}
                    </p>
                    <p className="mt-2  text-xs text-gray-600 md:text-sm">
                        <span>Last Refreshed:</span>{' '}
                        {getRelativeTime(dateUpdated)}
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
});

StatusCard.displayName = 'StatusCard';

export default function Page() {
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: ['liveStatus'],
        queryFn: currentStatus,
        refetchInterval: refreshInterval, // The status is updated every 2.5 minutes , The actual api itself updates every 3 minutes.
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });

    const [dateUpdated, setDateUpdated] = useState<Date>(new Date());

    function handleRefresh() {
        setDateUpdated(new Date());
        void refetch();
    }

    return (
        <div className="flex  flex-col items-center  justify-center">
            <Header />
            {isPending ? (
                <SkeletonCard />
            ) : (
                !isError &&
                data && (
                    <StatusCard
                        data={data}
                        refresh={handleRefresh}
                        dateUpdated={dateUpdated}
                    />
                )
            )}
            {isError && (
                <ErrorCard refresh={handleRefresh} dateUpdated={dateUpdated} />
            )}
            <Footer />
        </div>
    );
}
