import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const handleHome = (req, res) => {
    return res.send("HOME");
}

const handleLogin = (req, res) => {
    return res.send("LOGIN");
}

app.use(loggerMiddleware); 
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
    console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);
}

app.listen(PORT, handleListening);