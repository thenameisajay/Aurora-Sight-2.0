import { statusInfo } from '@/data/status-descriptions/status-descriptions';

export function getStatusDescription(status_id: string) {
    const status = statusInfo.find((status) => status.key === status_id);
    return status ? status.description : 'No description available';
}
