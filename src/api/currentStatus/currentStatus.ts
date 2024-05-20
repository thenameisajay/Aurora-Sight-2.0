import axios from 'axios';
import xml2js from 'xml2js';

import type { StatusData } from '@/types/interfaces/currentStatus';

const URL = 'https://aurorawatch-api.lancs.ac.uk/0.2/status/current-status.xml';

export async function currentStatus(): Promise<StatusData[]> {
    try {
        const response = await axios.get(URL);
        const xmlData: string = response.data.toString(); // Convert xmlData to a string

        const parsedData = await new Promise<StatusData[]>(
            (resolve, reject) => {
                xml2js.parseString(xmlData, (err, result) => {
                    if (err) {
                        reject(new Error('Failed to parse XML data'));
                        return;
                    }

                    const { status_id } =
                        result.current_status.site_status[0].$;
                    const { datetime } = result.current_status.updated[0];

                    // Pack it into an object
                    const jsonData: StatusData = {
                        status_id: status_id,
                        datetime: datetime,
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
