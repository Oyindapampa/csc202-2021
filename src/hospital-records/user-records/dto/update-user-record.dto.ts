import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRecordDto } from './create-user-record.dto';

export class UpdateUserRecordDto extends PartialType(CreateUserRecordDto) {}
