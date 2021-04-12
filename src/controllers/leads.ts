import { Request, Response } from "express";

import { Identifier } from "sequelize/types";
import Lead from "../db/models/lead";
import User from "../db/models/user";

export const createLead = async (req: Request, res: Response) => {
  try {
    const lead = req.body;

    const { userId } = req.params;

    const user = await User.findByPk(userId as Identifier);

    if (!user) {
      return res.sendStatus(400);
    }

    await Lead.create({ ...lead, UserId: userId });

    res.json({ message: "Lead created!" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
