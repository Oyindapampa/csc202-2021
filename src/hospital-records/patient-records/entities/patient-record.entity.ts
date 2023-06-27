import { ClinicRecord } from "src/hospital-records/user-records/entities/user-record.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class PatientRecord {
@PrimaryGeneratedColumn()
id: number;
@Column()
firstName: string;
@Column()
surname: string;
@Column({nullable: true})
middleName: string;
@Column({nullable: true})
homeAddress: string;
@Column()
matriculationNumber: number;
@Column({nullable: true})
dateOfBirth: Date;
@Column({nullable: true})
dateOfRegistration: Date;
@JoinColumn()
@OneToMany(type => ClinicRecord, ClinicRecord => ClinicRecord.PatientRecord)
ClinicRecord: ClinicRecord;
}