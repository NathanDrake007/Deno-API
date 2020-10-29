import { Application, Context} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import {getAllBooks,getBook,createBook,deleteBook} from './Controller/BookController.ts';
const app = new Application();
//static files
app.static('/','./public');
//routes
app.get('/',async (ctx: Context)=>{
    await ctx.file('./public/index.html');
});

app
    .get('/books',getAllBooks)
    .get('/books/:id',getBook)
    .post('/books',createBook)
    .delete('/books/:id',deleteBook);

// starts the server
app.start({port:3000});