export interface TitleArray extends Array<TitleObject> {}

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
    episodes?: any;
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
    background?: any;
    season: string;
    year: number;
    broadcast: TitleObjectBroadcast;
    producers: TitleObjectProducers[];
    licensors: any[];
    studios: TitleObjectStudios[];
    genres: TitleObjectGenres[];
    explicit_genres: any[];
    themes: TitleObjectThemes[];
    demographics: TitleObjectDemographics[];
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
    day?: any;
    month?: any;
    year?: any;
}
export interface TitleObjectAiredProp {
    from: TitleObjectAiredPropFrom;
    to: TitleObjectAiredPropTo;
}
export interface TitleObjectAired {
    from: string;
    to?: any;
    prop: TitleObjectAiredProp;
    string: string;
}
export interface TitleObjectBroadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
}
export interface TitleObjectProducers {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
export interface TitleObjectStudios {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
export interface TitleObjectGenres {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
export interface TitleObjectThemes {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
export interface TitleObjectDemographics {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}