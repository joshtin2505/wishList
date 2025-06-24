import type { RootNode } from "./richtext.types";
import type { StrapiItem } from "./strapires";

export type TermToBuy = "long" | "short" | "medium";

export interface Image extends StrapiItem {
  url: string;
  name: string;
  alternativeText: string;
  caption: string;
}

export interface Wish extends StrapiItem {
  title: string;
  subtitle: string;
  description: RootNode[];
  note: string;
  price: string | number;
  quantity: number;
  buyUrl: string;
  slug: string;
  termToBuy: TermToBuy;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  thumbnail: Image;
  images: Image[];
}
