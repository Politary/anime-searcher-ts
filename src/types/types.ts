import exp from 'constants';

export interface AnimeDetails {
    mal_id?: number;
    url?: string;
    image_url?: string;
    title?: string | undefined;
    airing?: boolean;
    synopsis?: string;
    type?: string;
    episodes?: number;
    score?: number;
    start_date?: string | null;
    end_date?: string | null;
    members?: number;
    rate?: string;
}

export interface SearchOptions {
    type: string;
    page?: number | undefined;
    status?: string | undefined;
    rated?: string | undefined;
    genre?: string | undefined;
    score?: number | undefined;
    limit?: number | undefined;
    order_by?: string | undefined;
    sort?: string | undefined;
    letter?: string | undefined;
}

export interface AppProps {
    to?: string | undefined;
}

export interface FetchData {
    data: {
        results: {};
    };
}

export interface FetchTitles {
    status: string;
    list: AnimeDetails[];
}
