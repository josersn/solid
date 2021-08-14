import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(req: Request, res: Response): Response {
        const { user_id } = req.headers;

        const users = this.listAllUsersUseCase.execute({ user_id });

        return res.json(users);
    }
}

export { ListAllUsersController };
