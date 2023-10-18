import { CohortStudents } from "./cohorts-students.model";
import { CourseCohorts } from "./courseCohort.model";
import { TeacherCohorts } from "./teacherCohort.model";

export class Cohorts {

    public id: number = 0;
    public Course: CourseCohorts = new CourseCohorts()
    public Teacher: TeacherCohorts = new TeacherCohorts()
    public CohortStudents: CohortStudents = new CohortStudents()

}