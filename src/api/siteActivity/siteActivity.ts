import axios from 'axios';
import xml2js from 'xml2js';

import type { SiteActivityData } from '@/types/interfaces/siteActivityData';

const URL =
    'https://aurorawatch-api.lancs.ac.uk/0.2/status/alerting-site-activity.xml';

export async function siteActivity(): Promise<SiteActivityData[]> {
    try {
        const response = await axios.get(URL);
        const xmlData: string = response.data.toString(); // Convert xmlData to a string

        const parsedData = await new Promise<SiteActivityData[]>(
            (resolve, reject) => {
                xml2js.parseString(xmlData, (err, result) => {
                    if (err) {
                        reject(new Error('Failed to parse XML data'));
                        return;
                    }

                    const { site_activity } = result;

                    const jsonData: SiteActivityData = {
                        lower_threshold: site_activity.lower_threshold.map(
                            (item: object) => item,
                        ),
                        updated: site_activity.updated.map(
                            (item: object) => item,
                        ),
                        activity: site_activity.activity.map(
                            (item: object) => item,
                        ),
                    };

                    resolve([jsonData]);
                });
            },
        );

        return parsedData;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
