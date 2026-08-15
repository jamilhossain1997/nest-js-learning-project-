import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser() {
        return { 
            message: 'User endpoint',
            jamil: 'This is a sample response from the user controller.!!!'  
         };
    }
}
