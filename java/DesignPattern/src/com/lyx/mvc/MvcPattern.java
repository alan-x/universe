package com.lyx.mvc;

public class MvcPattern {
    public static void main(String[] args) {
        StudentController studentController = new StudentController(new Student("1", "2"), new StudentView());
        studentController.show();


    }
}
