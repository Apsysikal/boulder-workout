import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
  await db.user.create({
    data: {
      username: "johndoe",
      passwordHash:
        "$2y$10$efSZ6zgCyNR1tmwEXWtXkuRlbtBZOb3l7gh6vNkFkDwj559iyxoXO",
      passwordSalt: "",
    },
  });
}

seed();
