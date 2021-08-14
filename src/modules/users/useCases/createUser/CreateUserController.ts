import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, email } = req.body;

        const user = this.createUserUseCase.execute({ name, email });

        return res.json(user);
    }
}

export { CreateUserController };
