import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalRecordsModule } from './hospital-records/hospital-records.module';

@Module({
  imports: [
 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'toothixers',
      entities: [
        "dist/**/*.entity{.ts,.js}"
        ],
      synchronize: true,
    }),
    HospitalRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
