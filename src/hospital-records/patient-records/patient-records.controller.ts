import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Render } from '@nestjs/common';
import { PatientRecordsService } from './patient-records.service';
import { CreatePatientRecordDto } from './dto/create-patient-record.dto';
import { UpdatePatientRecordDto } from './dto/update-patient-record.dto';

@Controller('PatientDatum')
export class PatientRecordsController {
  constructor(private readonly patientRecordsService: PatientRecordsService) {}

  @Post()
  create(@Body() createPatientRecordDto: CreatePatientRecordDto) {
    return this.patientRecordsService.create(createPatientRecordDto);
  }

  @Get()
  findAll() {
    return this.patientRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientRecordDto: UpdatePatientRecordDto) {
    return this.patientRecordsService.update(+id, updatePatientRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientRecordsService.remove(+id);
  }

  @Put(':id')
  async updatePatientRecord(
    @Param('id') id: string,
    @Body() updatePatientRecordDto: UpdatePatientRecordDto,
  ) {
    try {
      const updatedPatientRecord = await this.patientRecordsService.update(+id, updatePatientRecordDto);
      return updatedPatientRecord;
    }  catch (error) {
        // Handle error and return an appropriate response
      }
    }
  
}
