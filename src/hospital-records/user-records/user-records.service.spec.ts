import { Test, TestingModule } from '@nestjs/testing';
import { ClinicRecordservice } from './user-records.service';

describe('UserRecordsService', () => {
  let service: ClinicRecordservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicRecordservice],
    }).compile();

    service = module.get<ClinicRecordservice>(ClinicRecordservice);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
