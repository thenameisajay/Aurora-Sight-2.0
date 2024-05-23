'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { currentStatus } from '@/api/currentStatus/currentStatus';
import { siteActivity } from '@/api/siteActivity/siteActivity';
import { statusDescription } from '@/api/statusDescription/statusDescription';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { APICardProps } from '@/types/interfaces/cardProps';

const heading = 'API Status';
const description = 'Check the status of the AuroraWatch UK API.';
const refreshInterval = 150000;

const StatusCard = ({
    data,
    error,
    title,
    description,
    activeMessage,
    errorMessage,
}: APICardProps) => {
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

    const { data: statusDescriptionData, isError: statusDescriptionError } =
        useQuery({
            queryKey: ['status-description'],
            queryFn: statusDescription,
        });

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <HeadBanner heading={heading} description={description} />
            <div className="h-10 md:h-20"></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
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
                    errorMessage="Error, The API is currently unavailable."
                />
                <StatusCard
                    data={alertStatusData}
                    error={alertStatusError}
                    title="Alerting Site Activity API"
                    description={
                        alertStatusError
                            ? 'An error occurred while trying to retrieve the site activity.'
                            : 'The Alerting Site Activity API is currently available.'
                    }
                    activeMessage="Active"
                    errorMessage="Error, The API is currently unavailable."
                />
                <StatusCard
                    data={statusDescriptionData}
                    error={statusDescriptionError}
                    title="Status Description API"
                    description={
                        alertStatusError
                            ? 'An error occurred while trying to retrieve the site description.'
                            : 'The Status Description API is currently available.'
                    }
                    activeMessage="Active"
                    errorMessage="Error, The API is currently unavailable."
                />
            </div>
        </div>
    );
}
