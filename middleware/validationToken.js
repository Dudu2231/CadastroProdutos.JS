const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    // Primeiro, verifica se o token está no cookie
    if (req.cookies.accessToken) {
        token = req.cookies.accessToken;
    } else {
        // Caso contrário, verifica se o token está no cabeçalho de autorização
        const authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }
    }

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (error, decoded) => {
        if (error) {
            console.log(error.message);
            res.status(401);
            throw new Error(error.message);
        }
        req.user = decoded.user; // Aqui adicionamos os dados do usuário à requisição
        next();
    });
});


module.exports = validateToken
