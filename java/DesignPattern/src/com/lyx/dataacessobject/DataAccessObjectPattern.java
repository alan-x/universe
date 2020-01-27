package com.lyx.dataacessobject;

import java.util.function.Consumer;

public class DataAccessObjectPattern {
    public static void main(String[] args) {
        StudentDaoImpl studentDao = new StudentDaoImpl();
        studentDao.getAllStudents().forEach(new Consumer<Student>() {
            @Override
            public void accept(Student student) {
                System.out.println(student.getRollNo() + ":" + student.getName());
            }
        });

        Student student = studentDao.getStudent(1);
        System.out.println(student.getRollNo()+":"+student.getName());

        Student fuck = new Student("fuck", 999);
        studentDao.updateStudent(1,fuck);

        studentDao.deleteStudent(2);

        studentDao.getAllStudents().forEach(new Consumer<Student>() {
            @Override
            public void accept(Student student) {
                System.out.println(student.getRollNo() + ":" + student.getName());
            }
        });
    }
}
