import { BookList } from "./models/BookList";

export function printBookList(list: BookList) {
  list.items.forEach(book => console.log(book));
}
