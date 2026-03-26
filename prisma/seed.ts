import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@example.com",
        Language: "English",
        age: 30,
      },
      {
        name: "Bob",
        email: "bob@example.com",
        Language: "Spanish",
        age: 25,
      },
      {
        name: "Charlie",
        email: "charlie@example.com",
        Language: "French",
        age: 35,
      },
      {
        name: "David",
        email: "david@example.com",
        Language: "German",
        age: 40,
      },
      {
        name: "Eve",
        email: "eve@example.com",
        Language: "Japanese",
        age: 28,
      },
      {
        name: "Frank",
        email: "frank@example.com",
        Language: "Chinese",
        age: 32,
      },
      {
        name: "Grace",
        email: "grace@example.com",
        Language: "Korean",
        age: 26,
      },
      {
        name: "Heidi",
        email: "heidi@example.com",
        Language: "Italian",
        age: 31,
      },
      {
        name: "Ivan",
        email: "ivan@example.com",
        Language: "Russian",
        age: 33,
      },
      {
        name: "Judy",
        email: "judy@example.com",
        Language: "Portuguese",
        age: 29,
      },
      {
        name: "Kevin",
        email: "kevin@example.com",
        Language: "Dutch",
        age: 34,
      },
      {
        name: "Laura",
        email: "laura@example.com",
        Language: "Swedish",
        age: 27,
      },
      { name: "John", email: "john@test.com", Language: "English", age: 25 },
      {
        name: "Sara",
        email: "sara@test.com",
        Language: "Swedish",
        age: 17,
      },
      {
        name: "Mike",
        email: "mike@test.com",
        Language: "English, Spanish",
        age: 30,
      },
      { name: "Anna", email: "anna@test.com", Language: "German", age: 22 },
      {
        name: "Ravi",
        email: "ravi@test.com",
        Language: "Telugu, English",
        age: 28,
      },
      {
        name: "Lina",
        email: "lina@test.com",
        Language: "French",
        age: 19,
      },
      {
        name: "Tom",
        email: "tom@test.com",
        Language: "English",
        age: 15,
      },
      {
        name: "Eva",
        email: "eva@test.com",
        Language: "Swedish, English",
        age: 27,
      },
      { name: "Noah", email: "noah@test.com", Language: "Spanish", age: 18 },
      { name: "Maya", email: "maya@test.com", Language: "Hindi", age: 24 },
    ],
    skipDuplicates: true,
  });
}

seed().then(() => prisma.$disconnect());
