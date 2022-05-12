
import { prisma } from './../prisma';


export class GuestUserService {
    async execute(){
       const user = await prisma.user.findFirst({
           where: {
               name : 'guest'
           }
       })
       return user
    }
}