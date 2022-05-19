export interface IAuthor {
  name: string;
}

export interface IBook {
  name: string;
  price: string;
  author: string;
}

export interface AuthorDropDown {
  value: string;
  label: string;
}

export interface BookArray {
  id: number;
  book: IBook;
}

export interface IAuthorArray {
  id: number;
  author: IAuthor;
}