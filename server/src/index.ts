import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL] : [],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Test TS-server");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post("/contact", (req: Request, res: Response) => {
  const { name } = req.body;

  res.status(200).json({ message: `Thank you for your interest, ${name}` });
});
