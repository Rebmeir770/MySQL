"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new spotify_web_api_node_1.default({
        redirectUri: 'https://localhost:3001',
        clientId: '245995995f1c4a328408b62ec83e8ab7',
        clientSecret: '223155f529cb4c70b2601614f052d019'
    });
    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        });
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});
app.post('/ready', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new spotify_web_api_node_1.default({
        redirectUri: 'https://localhost:3001',
        clientId: '245995995f1c4a328408b62ec83e8ab7',
        clientSecret: '223155f529cb4c70b2601614f052d019'
    });
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.accces_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    })
        .catch(() => {
        res.sendStatus(400);
    });
});
app.use(express_1.default.static("./client/build"));
app.use(express_1.default.json());
exports.connection = mysql_1.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "meirMeiital080821",
    database: "register",
});
exports.connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.info("🔥 MySQL is connected 🛢 🔥");
    }
    catch (error) {
        console.error(error);
    }
});
const usersRoute_1 = __importDefault(require("./API/users/usersRoute"));
app.use('/api/users', usersRoute_1.default);
app.use('*', express_1.default.static("./client/build"));
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
