export interface SiteActivityData {
    lower_threshold: ThresholdTypes[];
    updatedTime: string[];
    graphData: ActivityPlotGraphTypes;
}

export interface XMLActivity {
    $: {
        status_id: string;
    };
    datetime: string[];
    value: string[];
}

export interface ThresholdXMLActivity {
    $: {
        status_id: string;
    };
    _: string;
}

export interface ThresholdTypes {
    color: string;
    value: number;
}

export interface ActivityPlotGraphTypes {
    data: {
        color: string;
        datetime: string;
        value: number;
    }[];
}
