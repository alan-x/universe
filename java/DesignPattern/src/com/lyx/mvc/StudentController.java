package com.lyx.mvc;

public class StudentController {
    private Student model;
    private StudentView view;

    public StudentController(Student model, StudentView view) {
        this.model = model;
        this.view = view;
    }

    public void show() {
        this.view.printStudentDetail(this.model.getName(), this.model.getRollNo());
    }

}
