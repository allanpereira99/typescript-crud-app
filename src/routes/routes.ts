import express, { Router } from "express";
import userRouter from "./user.routes";
import productsRouter from "./products.routes";

const route = Router();
route.use(express.json());
route.use(userRouter);
route.use(productsRouter)
export default route;
