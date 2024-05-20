import { statusInfo } from '@/data/status-descriptions/status-descriptions';

export function getStatusDescription(status_id: string) {
    const status = statusInfo.find((status) => status.key === status_id);
    const statusDescription: string = status
        ? status.description
        : 'No description available';
    return statusDescription;
}

export function getStatusMeaning(status_id: string) {
    const status = statusInfo.find((status) => status.key === status_id);
    const statusMeaning: string = status
        ? status.meaning
        : 'No meaning available';
    return statusMeaning;
}

export function getStatusColor(status_id: string) {
    const defaultColor = 'black';
    const status = statusInfo.find((status) => status.key === status_id);
    console.log('Statusss:', status);
    const statusColor: string = status ? status.color : defaultColor;

    return statusColor;
}
