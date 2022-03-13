import express from "express";
const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    res.send("HOME");
}

const handleLogin = (req, res) => {
    res.send("LOGIN");
}

const middleware = (req, res, next) => {
    console.log("I'm in middleware");
    next();
}

app.get("/", handleHome);
app.get("/login", middleware, handleLogin);

const handleListening = () => {
    console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);
}

app.listen(PORT, handleListening);