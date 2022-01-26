export interface AnimeDetails {
    mal_id: number;
    url: string;
    images: { jpg: { image_url: string } };
    image_url: string;
    title: string | undefined;
    airing: boolean;
    synopsis: string;
    type: string;
    episodes: number;
    score: number;
    start_date: string | null;
    end_date: string | null;
    members: number;
    rate: string;
}

export interface SearchOptions {
    type: string;
    q?: string;
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
    handleChange: (e: React.FormEvent<EventTarget>) => void;
    value?: string;
    items: { name: string; value: string }[];
}

export interface AppProps {
    to?: string;
    wrapOption?: boolean;
    value?: string | undefined;
    handleChange?: (e: React.FormEvent<EventTarget>) => void;
    handleSubmit?: () => void;
}
