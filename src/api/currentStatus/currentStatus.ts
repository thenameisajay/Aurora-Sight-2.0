import axios from 'axios';
import xml2js from 'xml2js';

const URL = 'https://aurorawatch-api.lancs.ac.uk/0.2/status/current-status.xml';

export async function currentStatus() {
    try {
        const response = await axios.get(URL);
        const xmlData: string = response.data.toString(); // Convert xmlData to a string

        return new Promise((resolve, reject) => {
            xml2js.parseString(xmlData, (err, result) => {
                if (err) {
                    reject(new Error('Failed to parse XML data'));
                    return;
                }

                const { status_id } = result.current_status.site_status[0].$;
                const { datetime } = result.current_status.updated[0];

                // Pack it into an object
                const jsonData = {
                    status_id: status_id,
                    datetime: datetime,
                };

                resolve([jsonData]);
            });
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
