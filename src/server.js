import express from "express";
const PORT = 4000;

const app = express();

const handleListening = () => {
    console.log(`Server listening on port 4000 🚀`);
}

app.listen(PORT, handleListening);