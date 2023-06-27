import { PatientRecord } from "src/hospital-records/patient-records/entities/patient-record.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ClinicRecord {
@PrimaryGeneratedColumn()
id: number;
@Column({nullable:true})
clinicDate: Date;
@Column({nullable:true})
natureOfAilment: string;
@Column({nullable: true})
medicinePrescribed: string;
@Column({nullable: true})
procedureUndertaken: string;
@Column({nullable:true})
dateOfNextAppointment: Date;
@ManyToOne(type => PatientRecord, PatientRecord => PatientRecord.ClinicRecord)
PatientRecord: PatientRecord;
}
