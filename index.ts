import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

/* ✅ Root route */
app.get("/", (req, res) => {
  res.send("Server is working!");
});

/* ✅ GET all users */
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

/* ✅ POST create user */
app.post("/users", async (req, res) => {
  try {
    const { name, email, age, Language } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        age,
        Language,
      },
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

/* ✅ PUT update user by email */
app.put("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const { name, age, Language } = req.body;

    const updatedUser = await prisma.user.update({
      where: { email: "anna@test.com" },
      data: {
        name: "Anna Sandra",
        age: 45,
        Language: "Portuguese",
      },
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "User not found or update failed" });
  }
});

/* ✅ DELETE users under age 20 */
app.delete("/users/under20", async (req, res) => {
  try {
    const result = await prisma.user.deleteMany({
      where: {
        age: {
          lt: 20,
        },
      },
    });

    res.json({
      message: "Deleted users under 20",
      count: result.count,
    });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
