export interface Quote {
  slug: string;
  quote: string;
  author: string;
  date: string;
}

export interface QuoteData {
  quote: Quote;
  loaded: boolean;
}