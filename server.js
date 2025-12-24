import express from 'express';
import dotenv from 'dotenv';
import ConnectToDB from './config/db.js';
import taskRoutes from "./routes/taskRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import errorHandler from './middlewares/errorMiddleware.js';

dotenv.config();
ConnectToDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/task', taskRoutes)
app.use('/auth', UserRoutes)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
