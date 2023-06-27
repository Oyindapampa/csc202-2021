import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRecordDto } from './dto/create-user-record.dto';
import { UpdateUserRecordDto } from './dto/update-user-record.dto';
import { ClinicRecord } from './entities/user-record.entity';
@Injectable()
export class ClinicRecordservice {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(ClinicRecord)
    private UserRecordRepository: Repository<ClinicRecord>
    ){}
    async create(CreateUserRecordDto: CreateUserRecordDto) {
      const newUserRecord: ClinicRecord = this.UserRecordRepository.create()
      return this.UserRecordRepository.save(newUserRecord);
      //return 'This action adds a new user';
      }
      async findAll() {
    //return `This action returns all userRecords`;
    return await this.UserRecordRepository.find();
  }

  async findOne(id: number) {
   //return `This action returns a #${id} user`;
return await this.UserRecordRepository.findOne({
  where: {
  //id // same as id:id
  }
  });
  }
  async update(id: number, updateUserRecordDto: UpdateUserRecordDto) {
   // return `This action updates a #${id} userRecord`;
   return await this.UserRecordRepository.update(id, updateUserRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} userRecord`;
    return await this.UserRecordRepository.delete(id);
  }
}
