/*  Library : Nivo
 * Chart : Bar Chart
 *  Documentation:  https://nivo.rocks/bar/
 */
import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';

import type { ActivityPlotGraphTypes } from '@/types/interfaces/siteActivityData';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const GenericResponsiveBar = ({ data }: ActivityPlotGraphTypes) => {
    const maxValue = Math.max(...data.map((item) => item.value)); // Finding the maximum value in my data
    const tickInterval = Math.ceil(maxValue / 5); // Divide the maximum value by the number of ticks I wanted
    const tickValues = Array.from({ length: 6 }, (_, i) => i * tickInterval); // Generated tick values

    return (
        <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="datetime"
            margin={{ top: 50, right: 60, bottom: 50, left: 80 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={(bar) =>
                bar.data.color === 'green' ? 'yellowgreen' : bar.data.color
            }
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 1,
                tickPadding: 5,
                tickRotation: -45,
                legend: 'Universal Time (UTC)',

                legendPosition: 'middle',
                legendOffset: 40,
                format: (value) => dayjs(value as Date).format('HH'),
            }}
            axisLeft={{
                tickSize: 3,
                tickPadding: 1,
                tickRotation: 0,
                legend: 'Activity (nT)',
                legendPosition: 'middle',
                legendOffset: -30,
                format: (value) => `${value}`,

                tickValues: tickValues,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            role="application"
            ariaLabel="Site activity data"
            barAriaLabel={(e) =>
                `Activity: ${e.value} nT at ${dayjs(e.indexValue).format(
                    'HH:mm',
                )}`
            }
            isInteractive={false}
        />
    );
};

export default GenericResponsiveBar;
