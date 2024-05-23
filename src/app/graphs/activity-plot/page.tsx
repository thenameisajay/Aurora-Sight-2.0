'use client';

import { useQuery } from '@tanstack/react-query';

import { siteActivity } from '@/api/siteActivity/siteActivity';
import GenericResponsiveBar from '@/components/charts/ResponsiveBar';

const refreshInterval = 150000;

const data = [
    {
        country: 'AD',
        'hot dog': 1,
        'hot dogColor': 'hsl(108, 70%, 50%)',
        burger: 69,
        burgerColor: 'hsl(155, 70%, 50%)',
        sandwich: 111,
        sandwichColor: 'hsl(179, 70%, 50%)',
        kebab: 100,
        kebabColor: 'hsl(9, 70%, 50%)',
        fries: 196,
        friesColor: 'hsl(294, 70%, 50%)',
        donut: 35,
        donutColor: 'hsl(36, 70%, 50%)',
    },
    {
        country: 'AE',
        'hot dog': 33,
        'hot dogColor': 'hsl(9, 70%, 50%)',
        burger: 100,
        burgerColor: 'hsl(340, 70%, 50%)',
        sandwich: 191,
        sandwichColor: 'hsl(56, 70%, 50%)',
        kebab: 97,
        kebabColor: 'hsl(321, 70%, 50%)',
        fries: 21,
        friesColor: 'hsl(82, 70%, 50%)',
        donut: 57,
        donutColor: 'hsl(123, 70%, 50%)',
    },
    {
        country: 'AF',
        'hot dog': 30,
        'hot dogColor': 'hsl(24, 70%, 50%)',
        burger: 88,
        burgerColor: 'hsl(175, 70%, 50%)',
        sandwich: 2,
        sandwichColor: 'hsl(113, 70%, 50%)',
        kebab: 16,
        kebabColor: 'hsl(80, 70%, 50%)',
        fries: 18,
        friesColor: 'hsl(302, 70%, 50%)',
        donut: 122,
        donutColor: 'hsl(100, 70%, 50%)',
    },
    {
        country: 'AG',
        'hot dog': 10,
        'hot dogColor': 'hsl(329, 70%, 50%)',
        burger: 168,
        burgerColor: 'hsl(330, 70%, 50%)',
        sandwich: 167,
        sandwichColor: 'hsl(274, 70%, 50%)',
        kebab: 148,
        kebabColor: 'hsl(182, 70%, 50%)',
        fries: 34,
        friesColor: 'hsl(335, 70%, 50%)',
        donut: 163,
        donutColor: 'hsl(29, 70%, 50%)',
    },
    {
        country: 'AI',
        'hot dog': 78,
        'hot dogColor': 'hsl(182, 70%, 50%)',
        burger: 76,
        burgerColor: 'hsl(193, 70%, 50%)',
        sandwich: 113,
        sandwichColor: 'hsl(2, 70%, 50%)',
        kebab: 169,
        kebabColor: 'hsl(338, 70%, 50%)',
        fries: 89,
        friesColor: 'hsl(75, 70%, 50%)',
        donut: 125,
        donutColor: 'hsl(289, 70%, 50%)',
    },
    {
        country: 'AL',
        'hot dog': 79,
        'hot dogColor': 'hsl(242, 70%, 50%)',
        burger: 45,
        burgerColor: 'hsl(86, 70%, 50%)',
        sandwich: 124,
        sandwichColor: 'hsl(298, 70%, 50%)',
        kebab: 105,
        kebabColor: 'hsl(222, 70%, 50%)',
        fries: 118,
        friesColor: 'hsl(156, 70%, 50%)',
        donut: 127,
        donutColor: 'hsl(151, 70%, 50%)',
    },
    {
        country: 'AM',
        'hot dog': 136,
        'hot dogColor': 'hsl(57, 70%, 50%)',
        burger: 109,
        burgerColor: 'hsl(311, 70%, 50%)',
        sandwich: 95,
        sandwichColor: 'hsl(201, 70%, 50%)',
        kebab: 143,
        kebabColor: 'hsl(160, 70%, 50%)',
        fries: 126,
        friesColor: 'hsl(278, 70%, 50%)',
        donut: 84,
        donutColor: 'hsl(98, 70%, 50%)',
    },
];

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
        <div>
            <h1>Activity Plot</h1>
            <div className="h-96 w-full">
                <p>Hello</p>
                <GenericResponsiveBar data={data} />
            </div>
        </div>
    );
}
