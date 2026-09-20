import express from "express";
import { client } from "@repo/db/client"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/signup", async (req,res)=>{
    const { username, password } = req.body;

    // Here you would typically hash the password and store the user in the database
    await client.user.create({
        data: {
            username,
            password // In a real application, never store plain passwords!
        }
    }).then(user => {
        res.status(201).json({ message: "User created successfully", user });
    }).catch(error => {
        res.status(500).json({ message: "Error creating user", error });
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});