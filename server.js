const express = require("express");
const sequelize = require("./config/database");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

app.get("/api/users", async (req, res) => {
  const users = await User.findAll({
    attributes: ["id", "name", "email", "role", "createdAt", "updatedAt"], // Без пароля!
  });
  res.json(users);
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Хешування пароля
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ id: newUser.id, name, email, role });
  } catch (error) {
    console.error("Помилка створення користувача:", error);
    res.status(500).json({ error: "Помилка сервера" });
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Синхронізація моделей з БД
    console.log("✅ Підключено до бази!");

    app.listen(5000, () => console.log("🚀 Сервер запущено на порту 5000"));
  } catch (error) {
    console.error("Помилка підключення до бази:", error);
  }
};

start();

