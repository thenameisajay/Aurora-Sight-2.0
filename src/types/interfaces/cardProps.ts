import type { StatusData } from '@/types/interfaces/currentStatus';
import type { SiteActivityData } from '@/types/interfaces/siteActivityData';

import type { StatusDescription } from './statusDescriptions';

export interface StatusCardProps {
    data: StatusData[];
    refresh: () => void;
    dateUpdated: Date;
}

export interface APICardProps {
    data: StatusData[] | SiteActivityData[] | StatusDescription[] | undefined;
    error: boolean;
    title: string;
    description: string;
    activeMessage: string;
    errorMessage: string;
}
