export class CreateUserRecordDto {
    readonly clinicDate: Date;
    readonly natureOfAilment: string;
    readonly medicinePrescribed: string;
    readonly procedureUndertaken: string;
    readonly dateOfNextAppointment: Date;
}