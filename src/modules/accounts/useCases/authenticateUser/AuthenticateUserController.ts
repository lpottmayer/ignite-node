import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


class AuthenticateUserControler {

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserUserCase = container.resolve(AuthenticateUserUseCase);

        const token = await authenticateUserUserCase.execute({ email, password });

        return res.json(token);
    }

}

export { AuthenticateUserControler };