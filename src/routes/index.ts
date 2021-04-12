import { Router } from "express";
import leadsRoutes from "./leads";
import usersRoutes from "./users";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setup = (router: Router) => {
  usersRoutes(router), leadsRoutes(router);
};

export default setup;
