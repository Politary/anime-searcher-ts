export interface AppProps {
    to: string;
}

export interface fetchOngoings {
    status?: string;
    list?: {
        mal_id?: number;
        url?: string;
        image_url?: string;
        title?: string;
        airing?: boolean;
        synopsis?: string;
        type?: string;
        episodes?: number;
        score?: number;
        start_date?: string | null;
        end_date?: string | null;
        members?: number;
        rate?: string;
    }[];
}

export interface userTestStatus {}
// let someArray: Array<{ id: number; name: string }> = [];
