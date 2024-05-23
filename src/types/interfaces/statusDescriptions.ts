interface Description {
    lang: string;
    text: string;
}

export interface Status {
    id: string;
    color: string;
    description: Description;
    meaning: Description;
}

export interface RecordStatus {
    color: string;
    description: Description;
    meaning: Description;
}

interface XmlDescription {
    $: { lang: string };
    _: string;
}

export interface XmlStatus {
    $: { id: string };
    color: [string];
    description: [XmlDescription];
    meaning: [XmlDescription];
}
