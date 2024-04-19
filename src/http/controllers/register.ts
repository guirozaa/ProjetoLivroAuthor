// import { Request, Response } from "express";
// import { prisma } from "../../lib/prisma";
// import { CreateAutorService } from "../../service/autor/create-autor-service";
// import { PrismaAutorRepository } from "../../repositorie/prisma/prisma-autor-repository";

// export async function register(request: Request, response: Response) {
//   const { name, email } = request.body;

//   const autorRepositorie = new PrismaAutorRepository();
//   const registerAutorService = new CreateAutorService(autorRepositorie);

//   return response.status(201).send();
// }
