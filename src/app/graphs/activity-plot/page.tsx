'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { siteActivity } from '@/api/siteActivity/siteActivity';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import GenericResponsiveBar from '@/components/charts/ResponsiveBar';
import Footer from '@/components/footer/Footer';

// import { transformedGraphData } from '@/data/graphs/activityPlotData';

const refreshInterval = 150000;

const title = 'Activity Plot';

const description =
    'This page displays the activity plot of the AuroraWatch UK site. The plot shows the activity of the site in (nT) over time. ';

// !Bug : The Footer is not optimised for the view
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

    const { updatedTime, graphData } = siteActivityData[0];

    const transformedGraphData = Object.values(graphData).map((item) => {
        return {
            color: item.color,
            datetime: item.datetime,
            value: item.value,
        };
    });

    const firstDateTime: Date = transformedGraphData[0].datetime;
    const lastDateTime: Date =
        transformedGraphData[transformedGraphData.length - 1].datetime;

    console.log('First Value:', firstDateTime);

    console.log('Last Value:', lastDateTime);

    console.log('Transformed Graph Data:', transformedGraphData);

    return (
        <>
            <div className="flex h-dvh w-full flex-col items-center justify-center">
                <HeadBanner title={title} description={description} />
                <p>
                    Last Updated :
                    {dayjs(updatedTime.toString()).format('DD/MM/YYYY HH:mm')}
                </p>
                <p>
                    {dayjs(firstDateTime).format('DD/MM/YYYY HH:mm')} -{' '}
                    {dayjs(lastDateTime).format('DD/MM/YYYY HH:mm')}
                </p>

                <div className=" mx-5 h-[500px] w-full">
                    <GenericResponsiveBar data={transformedGraphData} />
                </div>
            </div>
            <Footer />
        </>
    );
}
