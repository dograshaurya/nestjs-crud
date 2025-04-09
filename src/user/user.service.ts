import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    private users = [
        {
            id:1,
            name:"shaurya",
            type:"normal"
        },
        {
            id:2,
            name:"Katrina",
            type:"celibrity"
        }
    ]

    getAllUsers(){
        return this.users;
    }

    getUser(id:number){
        const user = this.users.find((user) => user.id === id);

        if(!user){
            throw new Error("User Not Found");
        }
        return user; 
    }

    adduser(user:UserDto){
        const id = Date.now();
        this.users.push({
            id,
            ...user
        })

        return this.getUser(id);
    }
}
