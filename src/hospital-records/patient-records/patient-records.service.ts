import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientRecordDto } from './dto/create-patient-record.dto';
import { UpdatePatientRecordDto } from './dto/update-patient-record.dto';
import { PatientRecord } from './entities/patient-record.entity';
@Injectable()
export class PatientRecordsService{
  constructor(
  @InjectRepository(PatientRecord)
  private PatientRecordRepository: Repository<PatientRecord>
  ){}
  async create(CreatePatientRecordDto: CreatePatientRecordDto) {
    const newPatientRecord: PatientRecord = this.PatientRecordRepository.create(CreatePatientRecordDto)
return this.PatientRecordRepository.save(newPatientRecord);
   // return 'This action adds a new patientRecord';
  }

  async findAll() {
    //return `This action returns all patientRecords`;
    return await this.PatientRecordRepository.find();
  }

  async findOne(id: number)  {
    //return `This action returns a #${id} user`;
    return await this.PatientRecordRepository.findOne({
    where: {
    //id // same as id:id
    }
    });
    }

  async update(id: number, updatePatientRecordDto: UpdatePatientRecordDto) {
    //return `This action updates a #${id} patientRecord`;
    return await this.PatientRecordRepository.update(id, updatePatientRecordDto);
  }

  async remove(id: number) {
   // return `This action removes a #${id} patientRecord`;
    return await this.PatientRecordRepository.delete(id);
  }
}
