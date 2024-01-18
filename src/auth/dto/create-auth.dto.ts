import {IsAlphanumeric, IsNotEmpty, Matches, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateAuthDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have at least 3 characters.' })
    @IsAlphanumeric(null, {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    @ApiProperty({
        type: String,
        description: "The target username"
    })
    username: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
    })
    @ApiProperty({
        type: String,
        description: "The target password"
    })
    password: string;
}
