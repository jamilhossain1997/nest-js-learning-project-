import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Product Manager' },
        { id: 3, name: 'Alice Johnson', position: 'UX Designer' },
    ];


    getAllEmployees(){
        return this.employees;
    }
    
    getEmployeeById(id:number){
        return this.employees.find(employee =>employee.id === id);
    }
}
