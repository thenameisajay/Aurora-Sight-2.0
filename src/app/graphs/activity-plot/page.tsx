'use client';

import { useQuery } from '@tanstack/react-query';

import { siteActivity } from '@/api/siteActivity/siteActivity';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import GenericResponsiveBar from '@/components/charts/ResponsiveBar';
import Footer from '@/components/footer/Footer';
import { transformedGraphData } from '@/data/graphs/activityPlotData';

const refreshInterval = 150000;

const title = 'Activity Plot';

const description =
    'This page displays the activity plot of the AuroraWatch UK site. The plot shows the activity of the site in nT over time. ';

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

    // const transformedGraphData = activity.map((activity) => {
    //     return {
    //         color: activity.color,
    //         datetime: activity.datetime,
    //         value: Number(activity.value),
    //     };
    // });

    console.log('Transformed Graph Data:', transformedGraphData);

    return (
        <div className="flex flex-col items-center justify-center">
            <HeadBanner title={title} description={description} />
            <div className=" mx-5 h-[500px] w-full">
                <GenericResponsiveBar data={transformedGraphData} />
            </div>
            <Footer />
        </div>
    );
}
