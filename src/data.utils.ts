import { BookInfo } from "./data";
import { BooksResponse } from "./pages/HomePage/components/BookCard/models";

export function toBookInfo(data: BooksResponse): BookInfo {
  throw new Error("Not implemented");
}

export function getBookImgUrl(data: BookInfo): string {
  throw new Error("Not implemented");
}