import { AppDataSource } from "./data-source"
import * as express from "express";

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json)

    return app.listen(process.env.PORT)
}).catch(error => console.log(error))
