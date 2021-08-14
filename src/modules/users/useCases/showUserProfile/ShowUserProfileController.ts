import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(req: Request, res: Response): Response {
        const { user_id } = req.params;

        const user = this.showUserProfileUseCase.execute({ user_id });

        return res.json(user);
    }
}

export { ShowUserProfileController };
