import {
  findUsersBySearchQuery,
  getAllUsers,
  updateUser,
} from "../controllers/users";

import { Router } from "express";

export default (router: Router) => {
  router.patch("/users/:id", updateUser);
  router.get("/users", getAllUsers);
  router.get("/users/:searchQuery", findUsersBySearchQuery);
};
