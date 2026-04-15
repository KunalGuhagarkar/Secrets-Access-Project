import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/secrets", (req, res) => {
  const secretPassword = req.body.password;
  if (secretPassword === "Kunal") {
    console.log("Correct Password");
    res.sendFile(path.join(__dirname, "public/secret.html"));
  } else {
    console.log("Incorrect Password");
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server started on https://localhost:3000/");
});
