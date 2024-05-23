import axios from 'axios';
import xml2js from 'xml2js';

import type { Status, XmlStatus } from '@/types/interfaces/statusDescriptions';

const URL = 'https://aurorawatch-api.lancs.ac.uk/0.2/status-descriptions.xml';

export async function statusDescription(): Promise<Status[]> {
    try {
        const response = await axios.get(URL);
        const xmlData: string = response.data.toString(); // Convert xmlData to a string

        const parsedData = await new Promise<Status[]>((resolve, reject) => {
            xml2js.parseString(xmlData, (err, result) => {
                if (err) {
                    reject(new Error('Failed to parse XML data'));
                    return;
                }

                const { status } = result.status_list;

                const transformedData: Status[] = status.map(
                    (item: XmlStatus) => {
                        return {
                            id: item.$.id,
                            color: item.color[0],
                            description: {
                                lang: item.description[0].$.lang,
                                text: item.description[0]._,
                            },
                            meaning: {
                                lang: item.meaning[0].$.lang,
                                text: item.meaning[0]._,
                            },
                        };
                    },
                );

                resolve(transformedData);
            });
        });

        return parsedData;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
