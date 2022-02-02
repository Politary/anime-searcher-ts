export interface SearchOptions {
    type: string;
    q: string;
    page: number;
    status?: string;
    rated?: string;
    genre?: string;
    score?: number;
    limit?: number;
    order_by?: string;
    sort?: string;
    letter?: string;
}

export interface OptionsSelect {
    handleChange: (value: string) => void;
    value?: string;
    items: { name: string; value: string }[];
}

export interface AppProps {
    to?: string;
    placeholder?: string;
    wrapOption?: boolean;
    value?: string | undefined;
    handleChange?: (e: React.FormEvent<EventTarget>) => void;
    handleSubmit?: () => void;
}
