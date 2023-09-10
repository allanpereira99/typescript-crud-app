import { Router } from "express";
import { UserService } from "./../modules/users/services/users.services";
import UserController from "./../modules/users/controller/users.controller";
import { UserRepository } from "./../modules/users/repositories/users.repository";
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = Router();
userRouter
  .route("/users")
  .post((req, res) => userController.createUser(req, res))
  .get((req, res) => userController.getUsers(req, res))
  .patch((req,res)=>userController.patchUser(req,res));
userRouter
  .route("/users/:id")
  .get((req, res) => userController.getUserById(req, res));

export default userRouter;
