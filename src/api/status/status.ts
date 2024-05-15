import axios from 'axios';
import xml2js from 'xml2js';

export async function liveStatus() {
    try {
        const response = await axios.get(
            'https://aurorawatch-api.lancs.ac.uk/0.2/status/current-status.xml',
        );
        const xmlData = response.data.toString(); // Convert xmlData to a string

        return new Promise((resolve, reject) => {
            xml2js.parseString(String(xmlData), (err, result) => {
                if (err) {
                    reject(new Error('Failed to parse XML data'));
                    return;
                }

                const { status_id } = result.current_status.site_status[0].$;
                const { datetime } = result.current_status.updated[0];

                // Pack it into an object
                const resultJson = {
                    status_id: status_id,
                    datetime: datetime,
                };

                const resultArray = [];

                resultArray.push(resultJson);

                resolve(resultArray);
            });
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
