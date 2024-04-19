import { app } from "./app";
import { authorRoutes } from "./routes/author";
import { bookRoutes } from "./routes/book";

const server = app.listen(3333, () => console.log("HTTP server rodando"));

app.use(authorRoutes);
app.use(bookRoutes);

process.on("SIGINT", () => {
  server.close();
  console.log("App encerrado");
});
