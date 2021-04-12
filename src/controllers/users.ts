import { Request, Response } from "express";

import Lead from "../db/models/lead";
import { Op } from "sequelize";
import User from "../db/models/user";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.body;

    await User.update(user, { where: { id } });

    /**
     * Here with MySQL we have to call db for result. In PostgreSQL we could return result using nicely option 'returning: true'
     */
    const updatedRow = await User.findByPk(id);

    res.json(updatedRow);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getAllUsers = async (_: any, res: Response) => {
  try {
    const allUsers = await User.findAll();

    res.json(allUsers);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const findUsersBySearchQuery = async (req: Request, res: Response) => {
  try {
    const { searchQuery } = req.params;

    const allUsers = await User.findAll({
      where: {
        [Op.or]: {
          firstName: { [Op.like]: "%" + searchQuery + "%" },
          lastName: { [Op.like]: "%" + searchQuery + "%" },
          email: { [Op.like]: "%" + searchQuery + "%" },
        },
      },
      include: [{ model: Lead, as: "leads" }],
    });

    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
