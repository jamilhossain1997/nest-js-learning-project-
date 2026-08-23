import { Body, Controller,Get, Param, Patch, Post, Put,Delete} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getAllStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: string){
        return this.studentService.getStudentById(parseInt(id));
    }

    @Post()
    addStudent(@Body() body: { name: string, age: number }){
        return this.studentService.addStudent(body);
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() body: { name: string, age: number }){
        return this.studentService.updateStudent(parseInt(id), body);
    }

    @Patch(':id')
    patchStudent(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number }>){
        return this.studentService.patchStudent(parseInt(id), body);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string){
        return this.studentService.deleteStudent(parseInt(id));
    }


}
