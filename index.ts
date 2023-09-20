import express, { Express, Request, Response } from "express";

import cartController from "./controllers/cartController";
import categoryController from "./controllers/categoryController";
import contactController from "./controllers/contactController";
import documentController from "./controllers/documentController";
import orderController from "./controllers/orderController";
import productController from "./controllers/productController";
import userController from "./controllers/userController";

const app: Express = express();

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://erkiparna:vdY205oKLqr1RLPe@cluster0.uod5eyl.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error: Error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', cartController);
app.use('/', categoryController);
app.use('/', contactController);
app.use('/', documentController);
app.use('/', orderController);
app.use('/', productController);
app.use('/', userController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});