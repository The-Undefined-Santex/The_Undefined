import { ContactInformation } from "./contact-information.model"

export class Teachers{
   id: number = 0
   dni: number = 0
   firstName: string = ''
   lastName: string = ''
   birth_date: Date = new Date()
   ContactInformation: ContactInformation = new ContactInformation()
//  constructor(
//     public id: number = 0,
//     public dni: number = 0,
//     public firstName: string = '',
//     public lastName: string = '',
//     public birth_date: Date = new Date(),
//     public ContactInformation: ContactInformation = new ContactInformation(),
//  ){}

// public get _id() {
//     return this.id
// }

// public get _dni() {
//     return this.dni

// }

// public get _firstName() {
//     return this.firstName

// }

// public get _lastName() {
//     return this.lastName
// }

// public get _birth_date() {
//     return this.birth_date
// }
}
