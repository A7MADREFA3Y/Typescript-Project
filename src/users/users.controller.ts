import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Patch, Post, Query,
    ValidationPipe
 } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get() // Get all users
    findAll(@Query('role')role?:'INTERN' | 'ENGINEER' | 'ADMIN' ) {
        return this.usersService.findAll(role);
    }

    @Get (':id') // Get a single user by ID
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }    

    @Post() // Create a new user
    create(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
        return this.usersService.create(CreateUserDto);
    }


    @Patch (':id') // Patch /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) UpdateUserDto: UpdateUserDto) {
        return this.usersService.update(id, UpdateUserDto);
    } 

    @Delete (':id') // Delete /users/:id
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(+id);
    }


}

