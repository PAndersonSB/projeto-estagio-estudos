DB_HOST="localhost"
DB_DATABASE="inovar"
DB_USER="root"
DB_PASSWORD=""
SERVER_PORT=3000

const express = require("express"); 
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.listen(process.env.SERVER_PORT, function () {
console.log("Server listening at: " + process.env.SERVER_PORT)});

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/login", require("./controllers/login.route"));

const bodyParser = require("body-parser")
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
const auth = require("./utils/auth");
auth.initialization(app);

app.use("/profile", require("./controllers/profile.route"));