import { CoursesDetailModel } from "./coursesDetails.model"

export class CoursesModel {
    id?: number;
    title: string = ""
    subtitle: string = ""
    description: string = ""
    duration: number = 0
    start_date: string = ""
    capacity: number = 0
    price: number = 0
    due: number = 0
    has_surcharge: number = 0
    surcharge_percentage: number = 0
    modality:string = ""
    schedules:string = ""
    banner:string = ""
    courseDetails: CoursesDetailModel[] = []
}
