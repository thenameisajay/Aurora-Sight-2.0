import axios from 'axios';
import xml2js from 'xml2js';

const URL =
    'https://aurorawatch-api.lancs.ac.uk/0.2/status/alerting-site-activity.xml';

export async function siteActivity() {
    try {
        const response = await axios.get(URL);
        const xmlData: string = response.data.toString(); // Convert xmlData to a string

        return new Promise((resolve, reject) => {
            xml2js.parseString(xmlData, (err, result) => {
                if (err) {
                    reject(new Error('Failed to parse XML data'));
                    return;
                }

                const { site_activity } = result;

                const jsonData = {
                    lower_threshold: site_activity.lower_threshold,
                    updated: site_activity.updated,
                    activity: site_activity.activity,
                };

                resolve([jsonData]);
            });
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
