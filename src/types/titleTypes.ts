export interface FetchList {
    data: {
        data: [];
        pagination: {};
    };
}

export interface FetchTitles {
    status: string;
    list: TitleObject[];
    pagination: {
        last_visible_page?: number;
        has_next_page?: boolean;
    };
    options: {};
}

export interface FetchObj {
    config: {};
    data: {
        data: TitleObject;
    };
    headers: {};
    request: {};
    status: number;
    statusText: string;
}

export interface TitleArray {
    data: TitleObject[];
    pagination: {};
}

export type TitleObjectMin = Pick<
    TitleObject,
    'title' | 'images' | 'score' | 'type' | 'duration' | 'mal_id'
>;

export interface TitleObject {
    mal_id: number;
    url: string;
    images: TitleObjectImages;
    trailer: TitleObjectTrailer;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes?: number;
    status: string;
    airing: boolean;
    aired: TitleObjectAired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background?: string | null;
    season: string;
    year: number;
    broadcast: TitleObjectBroadcast;
    producers: TitleObjectItem[];
    licensors: any[];
    studios: TitleObjectItem[];
    genres: TitleObjectItem[];
    explicit_genres: any[];
    themes: TitleObjectItem[];
    demographics: TitleObjectItem[];
}
export interface TitleObjectImagesJpg {
    image_url: string;
    small_image_url?: string;
    large_image_url?: string;
}
export interface TitleObjectImagesWebp {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}
export interface TitleObjectImages {
    jpg: TitleObjectImagesJpg;
    webp?: TitleObjectImagesWebp | undefined;
}
export interface TitleObjectTrailerImages {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
}
export interface TitleObjectTrailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: TitleObjectTrailerImages;
}
export interface TitleObjectAiredPropFrom {
    day: number;
    month: number;
    year: number;
}
export interface TitleObjectAiredPropTo {
    day?: string;
    month?: string;
    year?: string;
}
export interface TitleObjectAiredProp {
    from: TitleObjectAiredPropFrom;
    to: TitleObjectAiredPropTo;
}
export interface TitleObjectAired {
    from: string;
    to?: string;
    prop: TitleObjectAiredProp;
    string: string;
}

export interface TitleObjectBroadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
}

export interface TitleObjectItem {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
