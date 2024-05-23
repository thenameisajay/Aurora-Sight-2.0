export interface SiteActivityData {
    lower_threshold: [];
    updatedTime: string[];
    graphData: ActivityPlotGraphProps;
}

export interface XMLActivity {
    $: {
        status_id: string;
    };
    datetime: string[];
    value: string[];
}

export interface ThresholdActivity {
    $: {
        status_id: string;
    };
    _: string;
}

export interface ActivityPlotGraphProps {
    data: {
        color: string;
        datetime: string;
        value: number;
    }[];
}
