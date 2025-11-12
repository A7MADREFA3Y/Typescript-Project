import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get() // Get all users
    findAll(@Query('role')role?:'INTERN' | 'ENGINEER' | 'ADMIN' ) {
        return this.usersService.findAll(role);
    }

    @Get (':id') // Get a single user by ID
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }    

    @Post() // Create a new user
    create(@Body() user: {name : string, email : string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user);
    }


    @Patch (':id') // Patch /users/:id
    update(@Param('id') id: string, @Body() userupdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(+id, userupdate);
    } 

    @Delete (':id') // Delete /users/:id
    remove(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }


}

