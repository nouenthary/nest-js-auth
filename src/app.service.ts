import {Injectable} from '@nestjs/common';

interface User {
    id: number;
    name: string;
    gender: 'Male' | 'Female';
}

@Injectable()
export class AppService {
    getHello(): any {

        let data: User[] = [
            {
                id: Math.random(),
                gender: "Male",
                name: "admin"
            },
            {
                id: Math.random(),
                gender: "Female",
                name: "nita"
            },
            {
                id: Math.random(),
                gender: "Female",
                name: "seyha"
            }
        ];

        return data;
    }
}
