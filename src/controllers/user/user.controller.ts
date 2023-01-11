import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UserController {
  /*
    Class controller for the User endpoint
    */
  @Get('')
  getUsers() {
    /*
    Get all the users from the User Model
    */
    return `All users`;
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    /*
    Get a single suer based in the userId
    */
    return `User => ${userId}`;
  }
}
