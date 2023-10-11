import { ContactInformation } from "./contact-information.model"

export class Teachers{
   id: number = 0
   dni: number = 0
   firstName: string = ''
   lastName: string = ''
   birth_date: Date = new Date()
   ContactInformation: ContactInformation = new ContactInformation()
   contactInformationId: number = 0
}
