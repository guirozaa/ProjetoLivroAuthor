import { Router, response } from "express";
import { prisma } from "../../lib/prisma";
import { request } from "http";

export const bookRoutes = Router();

bookRoutes.post("/book", async (request, response) => {
  const { title, description, authorid } = request.body;

  const book = await prisma.book.create({
    data: {
      description,
      title,
      authorid,
    },
  });
  return response.status(201).send({ book });
});

bookRoutes.get("/book", async (request, response) => {
  const book = await prisma.book.findMany();
  return response.status(200).send({ book });
});

// bookRoutes.delete("/book/:id", async (request, response) => {
//   const { id } = request.params;

//   const book = await prisma.book.delete({
//     //criar e atualizar =data
//     //o resto = where
//     where: { id },
//   });
//   response.send("deletado com sucesso!!");
// });

bookRoutes.delete("/book/:id", async (request, response) => {
  const { id } = request.params;

  const book = await prisma.book.delete({
    //criar e atualizar =data
    //o resto = where
    where: { id },
  });
  return response.send("DELETADO COM SUCESSO!!");
});

bookRoutes.get("/book/:id", async (request, response) => {
  const { id } = request.params;

  const book = await prisma.book.findUniqueOrThrow({
    where: { id },
  });

  return response.status(200).send({ book });
});

bookRoutes.put("/book/:id", async (request, response) => {
  const id = request.params;
  const { title, description, authorid } = request.body;

  const book = await prisma.book.update({
    where: id,
    data: {
      description,
      title,
      authorid,
    },
  });
  return response.status(201).send({ book });
});
