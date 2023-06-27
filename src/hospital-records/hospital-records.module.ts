import { Module } from '@nestjs/common';
import { PatientRecordsModule } from './patient-records/patient-records.module';
import { UserRecordsModule } from './user-records/user-records.module';

@Module({
    imports:[PatientRecordsModule,UserRecordsModule]
})
export class HospitalRecordsModule {}
