export interface AnimeDetails {
    mal_id: number;
    url: string;
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

export interface TitleDetails {
    request_hash?: string;
    request_cached?: boolean;
    request_cache_expiry?: number;
    mal_id?: number;
    url?: string;
    image_url?: string;
    trailer_url?: string;
    title?: string;
    title_english?: string;
    title_japanese?: string;
    type?: string;
    source?: string;
    episodes?: null;
    status?: string;
    airing?: boolean;
    duration?: string;
    rating?: string;
    score?: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: null;
    premiered?: string;
    broadcast?: string;
}

export interface SearchOptions {
    type: string;
    q?: string;
    page?: number;
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
    value: string | undefined;
    items: { name: string; value: string }[];
}

export interface AppProps {
    to?: string | undefined;
    wrapOption?: boolean;
    value?: string | undefined;
    handleChange?: (e: React.FormEvent<EventTarget>) => void;
    handleSubmit?: () => void;
}

export interface FetchList {
    data: {
        results: {};
    };
}

export interface FetchObj {
    data: {};
}

export interface FetchTitles {
    status: string;
    list: AnimeDetails[];
    options: {};
}

export interface FetchTitle {
    status: string;
    data: TitleDetails;
}
