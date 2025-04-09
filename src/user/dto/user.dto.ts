import { IsString, MinLength } from "class-validator";
import { Transform } from "class-transformer";
export class UserDto {

    @Transform(({value}) => {
        if(value === 'Rimpy') return 'Love';
        return value;
    })
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    type: string;
}
