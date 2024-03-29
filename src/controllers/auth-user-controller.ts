import {Request, Response} from "express"
import { AuthUserService } from "../services/auth-user-service"


export class AuthUserController {
    async handler(req: Request, res: Response){

        const {code} =  req.body
        
        const service = new AuthUserService

        try{
            const result = await service.execute(code)  

            return res.json(result)

        }catch(err: any){

            return res.json(err.message)
        }

    }
}