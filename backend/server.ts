import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 8000

const app: Application = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" })
})

app.listen(PORT, () => {
  console.log(`SERVER is RUNNING at 'http://localhost:${PORT}'`)
})
