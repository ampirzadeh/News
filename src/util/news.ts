import Axios, { AxiosInstance } from "axios";

export interface Article {
  content: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  description: string;
  title: string;
  author: string;
  source: {
    name: string;
    id?: null | number;
  };
}

export type Response =
  | {
      articles: Article[];
      totalResults: number;
      status: "ok";
    }
  | {
      articles: Article[];
      totalResults: number;
      status: "error";
      code: string;
      message: string;
    };

export type Country =
  | "ae"
  | "ar"
  | "at"
  | "au"
  | "be"
  | "bg"
  | "br"
  | "ca"
  | "ch"
  | "cn"
  | "co"
  | "cu"
  | "cz"
  | "de"
  | "eg"
  | "fr"
  | "gb"
  | "gr"
  | "hk"
  | "hu"
  | "id"
  | "ie"
  | "il"
  | "in"
  | "it"
  | "jp"
  | "kr"
  | "lt"
  | "lv"
  | "ma"
  | "mx"
  | "my"
  | "ng"
  | "nl"
  | "no"
  | "nz"
  | "ph"
  | "pl"
  | "pt"
  | "ro"
  | "rs"
  | "ru"
  | "sa"
  | "se"
  | "sg"
  | "si"
  | "sk"
  | "th"
  | "tr"
  | "tw"
  | "ua"
  | "us"
  | "ve"
  | "za";
export interface FetchEverythingParams extends BasicParams {
  qInTitle?: string;
  domains?: string;
  excludeDomains?: string;
  language?: string;
  from?: string;
  to?: string;
  sortBy?: string;
}
export type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
export interface BasicParams {
  sources?: string;
  pageSize?: number;
  page?: number;
  q?: string;
  category?: Category | string;
  country?: Country | string;
}
export default class NewsApi {
  private axios: AxiosInstance;
  constructor(apiKey: string) {
    this.axios = Axios.create({
      baseURL: "https://newsapi.org/v2",
      params: {
        apiKey,
        language: "en",
      },
      headers: {
        origin: "http://localhost:8080",
        referer: "http://localhost:8080/",
      },
    });
  }
  async everything(params: FetchEverythingParams) {
    const { data } = await this.axios.get<Response>("/everything", {
      params,
    });

    return data;
  }
  async topHeadlines(params: BasicParams) {
    const { data } = await this.axios.get<Response>("/top-headlines", {
      params,
    });

    return data;
  }
}
