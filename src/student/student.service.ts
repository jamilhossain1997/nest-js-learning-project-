import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Michael Johnson', age: 19 },
    ];

    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        return this.students.find(student => student.id === id);
    }

    //POST method to add a new student
    addStudent(student: { name: string, age: number }) {
        const NewStudent = {
            id: Date.now(),
            ...student
        }
        this.students.push(NewStudent);
        return NewStudent;
    }

    updateStudent(id: number, student: { name: string, age: number }) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = { id, ...student }
            return this.students[index];
        } else {
            throw new Error(`Student with id ${id} not found`);
        }
    }

    patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
        const student = this.getStudentById(id);
        if (!student) {
            throw new Error(`Student with ID ${id} not found`);
        }
        Object.assign(student, data);

        return student;
    }

   deleteStudent(id: number){
       const index = this.students.findIndex(student => student.id === id);
       if(index !== -1){
           const deletedStudent = this.students.splice(index,1);
           return deletedStudent[0];
       }
   }

}
