import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

/* 
GET / users
GET / users/:id
POST / users
PATCH / users /:id
DELETE / users /:id
*/

    @Get() // Get all users
    findAll(@Query('role')role?:'INTERN' | 'ENGINEER' | 'ADMIN' ) {
        return [];
    }

    @Get (':id') // Get a single user by ID
    findOne(@Param('id') id: string) {
        return {id};
    }    

    @Post() // Create a new user
    create(@Body() user: {}) {
        return user;
    }


    @Patch (':id') // Patch /users/:id
    update(@Param('id') id: string, @Body() userupdate: {}) {
        return {id, ...userupdate};
    } 

    @Delete (':id') // Delete /users/:id
    remove(@Param('id') id: string) {
        return {deleted: id};
    }


}

