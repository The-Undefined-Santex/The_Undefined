import { UserModel } from "./users.model"

export class AdminModel {
    id?: number
    dni: number = 0
    firstName: string = ""
    lastName: string = ""
    userId: number = 0
    public User: UserModel = new UserModel()
  }