import { Router } from "express";
import { createLead } from "../controllers/leads";

export default (router: Router) => {
  router.post("/leads/:userId", createLead);
};
