import { statusInfo } from '@/data/status-descriptions/status-descriptions';

export function getStatusDescription(status_id: string) {
    const status = statusInfo.find((status) => status.key === status_id);
    const statusDescription: string = status
        ? status.description
        : 'No description available';
    return statusDescription;
}

export function getStatusColor(status_id: string) {
    const status = statusInfo.find((status) => status.key === status_id);
    console.log('Statusss:', status);
    const statusColor: string = status ? status.color : '#000000';
    console.log('Status Color:', statusColor);
    return statusColor;
}
