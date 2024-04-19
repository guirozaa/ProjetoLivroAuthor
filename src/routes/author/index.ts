import { Router, response } from "express";
import { prisma } from "../../lib/prisma";

export const authorRoutes = Router();

authorRoutes.post("/author", async (request, response) => {
  const { name, email } = request.body;

  const author = await prisma.author.create({
    data: {
      name,
      email,
    },
  });
  return response.status(201).send({ author });
});

authorRoutes.get("/author", async (request, response) => {
  const author = await prisma.author.findMany();

  return response.send(author);
});

authorRoutes.get("/author/:id", async (request, response) => {
  // Pegar ID do parâmetro, ID desejado
  const { id } = request.params;

  const author = await prisma.author.findUniqueOrThrow({
    where: { id },
  });
  return response.send(author);
});

authorRoutes.delete("/author/:id", async (request, response) => {
  const { id } = request.params;

  const author = await prisma.author.delete({
    //criar e atualizar =data
    //o resto = where
    where: { id },
  });
  return response.send("DELETADO COM SUCESSO!!");
});

authorRoutes.put("/author/:id", async (request, response) => {
  //Dar um request tanto no parametro quanto no body
  //request.params => pegar o id da onde deseja modificar
  //request.body => informações que deseja modificar
  const { id } = request.params;
  const { name, email } = request.body;

  const author = await prisma.author.update({
    //Onde o ID for ... Bote(data) ...
    where: { id },
    data: {
      name,
      email,
    },
  });
  return response.status(200).send({ author });
});
