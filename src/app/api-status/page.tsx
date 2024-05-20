'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import { siteActivity } from '@/api/siteActivity/siteActivity';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { StatusData } from '@/types/interfaces/currentStatus';
import type { SiteActivityData } from '@/types/interfaces/siteActivityData';

const heading = 'API Status';
const description = 'Check the status of the AuroraWatch UK API.';
const refreshInterval = 150000;

interface CardProps {
    data: StatusData[] | SiteActivityData[];
    error: boolean;
    title: string;
    description: string;
    activeMessage: string;
    errorMessage: string;
}

const StatusCard = ({
    data,
    error,
    title,
    description,
    activeMessage,
    errorMessage,
}: CardProps) => {
    const serverActive = data && data.length > 0;
    const message = serverActive && !error ? activeMessage : errorMessage;

    return (
        <Card className="relative mx-4 mt-3 overflow-y-scroll md:w-96">
            <CardHeader>
                <CardTitle className="text-1xl md:text-2xl">{title}</CardTitle>
                <CardDescription className="text-gray-500 md:text-base">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex w-full justify-center">
                <Badge
                    variant={serverActive && !error ? 'default' : 'destructive'}
                    className="text-sm md:text-base"
                >
                    {message}
                </Badge>
            </CardContent>
        </Card>
    );
};

export default function Page() {
    const { data: currentStatusData = [], isError: currentStatusError } =
        useQuery({
            queryKey: ['liveStatus'],
            queryFn: currentStatus,
            refetchInterval: refreshInterval,
        });

    const { data: alertStatusData = [], isError: alertStatusError } = useQuery({
        queryKey: ['siteActivity'],
        queryFn: siteActivity,
        refetchInterval: refreshInterval,
    });

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <HeadBanner heading={heading} description={description} />
            <div className="h-10 md:h-20"></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <StatusCard
                    data={currentStatusData}
                    error={currentStatusError}
                    title="Current Status API"
                    description={
                        currentStatusError
                            ? 'An error occurred while trying to retrieve the current status.'
                            : 'The Current Status API is currently available.'
                    }
                    activeMessage="Active"
                    errorMessage="Error"
                />
                <StatusCard
                    data={alertStatusData}
                    error={alertStatusError}
                    title="Altering Site Activity API"
                    description={
                        alertStatusError
                            ? 'An error occurred while trying to retrieve the site activity.'
                            : 'The Alterting Site Activity API is currently available.'
                    }
                    activeMessage="Active"
                    errorMessage="Error, The API is currently unavailable."
                />
            </div>
        </div>
    );
}
