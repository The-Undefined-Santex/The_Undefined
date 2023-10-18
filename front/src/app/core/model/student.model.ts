import { Cohorts } from "./cohorts.model";
import { ContactInformation } from "./contact-information.model";

export class Student {

    public id: number = 0
    public first_name: string = ''
    public last_name: string = ''
    public document_number: number = 0
    public birth_date: Date = new Date()
    public situation: string = ''
    public ContactInformation: ContactInformation = new ContactInformation()
    public contactInformationId: number = 0;
    public Cohorts: Cohorts[] = [];

    constructor() {}

}