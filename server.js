const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/constants");

const authRouter = require("./routers/auth");
const teamsRouter = require("./routers/teams");
const playersRouter = require("./routers/players");

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/teams", teamsRouter);
app.use("/players", playersRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
