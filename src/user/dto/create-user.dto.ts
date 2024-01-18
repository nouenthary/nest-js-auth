import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have at least 2 characters.' })
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: "The target name"
    })
    name: string;

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
    @IsEmail(null, { message: 'Please provide valid Email.' })
    @ApiProperty({
        type: String,
        description: "The target description"
    })
    email: string;

    @IsInt()
    @ApiProperty({
        type: Number,
        description: "The target number"
    })
    age: number;

    @IsString()
    @IsEnum(['f', 'm', 'u'])
    @ApiProperty({
        type: String,
        description: "The target gender"
    })
    gender: string;

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
