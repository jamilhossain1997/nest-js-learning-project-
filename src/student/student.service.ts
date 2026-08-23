import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Michael Johnson', age: 19 },
    ];

    getAllStudents(){
        return this.students;
    }

    getStudentById(id:number){
        return this.students.find(student => student.id === id);
    }

    //POST method to add a new student
    addStudent(student:{ name:string, age:number}){
        const NewStudent = {
            id: Date.now(),
            ...student
        }
        this.students.push(NewStudent);
        return NewStudent;
    }
}
