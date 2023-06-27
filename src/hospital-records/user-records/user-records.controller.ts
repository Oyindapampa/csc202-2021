import { Controller,Render, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicRecordservice } from './user-records.service';
import { CreateUserRecordDto } from './dto/create-user-record.dto';
import { UpdateUserRecordDto } from './dto/update-user-record.dto';

@Controller('ClincRecord')
export class UserRecordsController {
  constructor(private readonly userRecordsService: ClinicRecordservice) {}

  @Post()
  create(@Body() createUserRecordDto: CreateUserRecordDto) {
    return this.userRecordsService.create(createUserRecordDto);
  }

  @Get()
  findAll() {
    return this.userRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRecordDto: UpdateUserRecordDto) {
    return this.userRecordsService.update(+id, updateUserRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRecordsService.remove(+id);
  }
  /*@Get('create')
  @Render('user-records/create-user-records.html')
  createForm() {
  }*/
}
