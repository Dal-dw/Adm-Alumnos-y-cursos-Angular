export interface StudentApi {
  info: StudentApiInfo;
  results: StudentApiResult[];
}

export interface StudentApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface StudentApiResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: StudentApiResultDescription;
  location: StudentApiResultDescription;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface StudentApiResultDescription {
  name: string;
  url: string;
}
