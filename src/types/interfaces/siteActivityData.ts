export interface SiteActivityData {
    lower_threshold: string[];
    updatedTime: string[];
    activity: string[];
}

export interface XMLActivity {
    $: {
        status_id: string;
    };
    datetime: string[];
    value: string[];
}

export interface thresholdActivity {
    $: {
        status_id: string;
    };
    _: string;
}
