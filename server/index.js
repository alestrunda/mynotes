//set-up
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import notesController from "./controllers/notes";

const app = express(),
  port = process.env.PORT || 8080;

//allows access from outside
app.use(cors());

//use body parser to get parameters from requests
app.use(bodyParser.json());

//routes
app.get("/notes/", notesController.getNotes);
app.post("/notes/", notesController.createNote);
app.get("/notes/:id", notesController.getNote);
app.put("/notes/:id", notesController.editNote);
app.delete("/notes/:id", notesController.deleteNote);

//start server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
