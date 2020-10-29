import {Context} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import Book from '../Model/BookModel.ts';

let books: Book[] = [
    {id: '1', title: 'Harry Potter',author:'Drake'},
    {id: '2', title: 'Naughty Dog',author:'Sam'},
    {id: '3', title: 'Uncharted',author:'nate'},
    {id: '4', title: 'Splinter Cell',author:'fisher'}
];

export const getAllBooks = (ctx:Context)=>{
    return ctx.json(books);
}
export const getBook = (ctx:Context) =>{
    const id = ctx.params.id;
    const book = books.find((b: Book) => b.id === id);

    if(book){
        return ctx.json(book);
    }
    return ctx.string("book is not available");
}

export const createBook = async (ctx:Context) =>{
    const {id, title, author} = await ctx.body();
    const book = {id,title,author};
    books.push(book);
    return ctx.string('done');
}

export const deleteBook = (ctx:Context) => {
    const id = ctx.params.id;
    const book = books.find((b:Book) => b.id === id);
    if(book){
        books = books.filter((b:Book) => b.id !== id);
        return ctx.json(books);
    }
    return ctx.string("book is not available");
}