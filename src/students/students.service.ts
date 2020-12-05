import {Get, Injectable, Post} from '@nestjs/common';
import {Student, StudentDocument} from "./schemas/product.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}
  private students = []

  @Get()
  async getAll():Promise<Student[]> {
    return this.studentModel.find().exec()
    // return this.students
  }

  @Get(':id')
  async getById(id) {
    return this.studentModel.findById(id)
    // return this.students.find( student => student.id ===  id)
  }

  @Post()
  async create(student) {
    const newStudent = new this.studentModel(student)
    return newStudent.save()
  }
}
