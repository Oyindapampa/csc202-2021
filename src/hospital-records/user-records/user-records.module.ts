import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicRecordservice } from './user-records.service';
import { UserRecordsController } from './user-records.controller';
import { ClinicRecord } from './entities/user-record.entity';
import { PatientRecord } from '../patient-records/entities/patient-record.entity';
@Module({
imports: [TypeOrmModule.forFeature([ClinicRecord, PatientRecord])],
controllers: [UserRecordsController],
providers: [ClinicRecordservice]
}) 
export class UserRecordsModule {}                                                                    