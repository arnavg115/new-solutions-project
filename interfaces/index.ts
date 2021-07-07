export interface Articles {
  name: string;
  desc: string;
  href: string;
}
export interface Editions {
  num: number;
  name: string;
  articles: Articles[];
}

export interface props {
  data: Editions[];
}
