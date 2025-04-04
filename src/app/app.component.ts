import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Student_Task';

  students: { name: string; age: number; email: string; course: string }[] = [];

  student = { name: '', age: 0, email: '', course: '' };

  register() {
    if (
      this.student.name &&
      this.student.age &&
      this.student.email &&
      this.student.course
    ) {
      this.students.push({ ...this.student });
      console.log('Students:', this.students);
    }
  }

  // Remove student from the list by index
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  // Reset form fields
  resetForm() {
    this.student = { name: '', age: 0, email: '', course: '' };
  }
}
