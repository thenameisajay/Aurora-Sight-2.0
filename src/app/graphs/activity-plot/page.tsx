'use client';

import { useQuery } from '@tanstack/react-query';

import { siteActivity } from '@/api/siteActivity/siteActivity';
import GenericResponsiveBar from '@/components/charts/ResponsiveBar';
import { transformedGraphData } from '@/data/graphs/activityPlotData';

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

    const { updatedTime, lower_threshold, activity } = siteActivityData[0];

    console.log('Updated Time:', updatedTime);
    console.log('Lower Threshold:', lower_threshold);
    console.log('Activity:', activity);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Activity Plot</h1>
            <div className=" mx-5 h-[500px] w-full">
                <p>Hello</p>
                <GenericResponsiveBar data={transformedGraphData} />
            </div>
        </div>
    );
}
