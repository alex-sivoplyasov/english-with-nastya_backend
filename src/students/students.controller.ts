import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import {CreateStudentDto} from './dto/create-student.dto'
import {StudentsService} from "./students.service";

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService:StudentsService) {

  }
  @Get()
  getAll() {
    return this.studentsService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id:string) {
    return this.studentsService.getById(id)
  }

  @Post()
  createStudent(@Body() student:CreateStudentDto) {
    return this.studentsService.create(student)
  }
}
