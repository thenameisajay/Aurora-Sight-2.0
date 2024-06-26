import type { RecordStatus } from '@/types/interfaces/statusDescriptions';

/*
 * Derived from the AuroraWatch UK API status descriptions. (https://aurorawatch-api.lancs.ac.uk/0.2/status-descriptions.xml)
 * Chose to store it locally for helper functions to access the data rather than making an API call each time.
 * Disadvantage: The data will not be updated if the API data changes.
 */

export const STATUS_DESCRIPTIONS: Record<string, RecordStatus> = {
    green: {
        color: '#33ff33',
        description: {
            lang: 'en',
            text: 'No significant activity',
        },
        meaning: {
            lang: 'en',
            text: 'Aurora is unlikely to be visible by eye or camera from anywhere in the UK.',
        },
    },
    yellow: {
        color: '#ffff00',
        description: {
            lang: 'en',
            text: 'Minor geomagnetic activity',
        },
        meaning: {
            lang: 'en',
            text: 'Aurora may be visible by eye from Scotland and may be visible by camera from Scotland, northern England and Northern Ireland.',
        },
    },
    amber: {
        color: '#ff9900',
        description: {
            lang: 'en',
            text: 'Amber alert: possible aurora',
        },
        meaning: {
            lang: 'en',
            text: 'Aurora is likely to be visible by eye from Scotland, northern England and Northern Ireland; possibly visible from elsewhere in the UK. Photographs of aurora are likely from anywhere in the UK.',
        },
    },
    red: {
        color: '#ff0000',
        description: {
            lang: 'en',
            text: 'Red alert: aurora likely',
        },
        meaning: {
            lang: 'en',
            text: 'It is likely that aurora will be visible by eye and camera from anywhere in the UK.',
        },
    },
};

export const statusInfo = Object.entries(STATUS_DESCRIPTIONS).map(
    ([key, { color, description, meaning }]) => ({
        key,
        color,
        description: description.text,
        meaning: meaning.text,
    }),
);
