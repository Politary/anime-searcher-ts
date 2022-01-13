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

export interface AppProps {
    to?: string | undefined;
}

export interface FetchData {
    data: {
        results: {};
    };
}

export interface FetchOngoings {
    status: string;
    list: AnimeDetails[];
}
