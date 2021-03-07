import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book {
    id: string;
    title: string;
    author: string;
}

let books: Book[] = [
    {
        id: "1",
        title: "Book One",
        author: "One"
    },
    {
        id: "2",
        title: "Book One",
        author: "One"
    },
    {
        id: "3",
        title: "Book One",
        author: "One"
    },
]

router.get('/', (context) => {
    context.response.body = "Hello world";
})
    .get("/books", (context) => {
        context.response.body = books;
    })
    .post("/book", async (context) => {
        const body = await context.request.body();

        //만약 정보를 제공하지 않았다면
        if(!context.request.hasBody){
            context.response.status = 400
            context.response.body = "데이터가 없습니다."
        } else {
            //정보를 제공 받았다면
            //우선 임의로 아이디를 생성하고 제공받은 정보로 book object를 만들어준다.

            const book: Book = body.value;
            book.id = v4.generate();
            books.push(book)
            context.response.status = 201;
            context.response.body = book;
        }
    })


console.log(`Server is listening on port 5000`);
await app.listen({ port: 5000 });