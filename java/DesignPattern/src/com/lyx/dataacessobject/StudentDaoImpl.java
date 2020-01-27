package com.lyx.dataacessobject;

import java.util.ArrayList;
import java.util.List;

public class StudentDaoImpl implements StudentDao {
    List<Student> studentList = new ArrayList<>();

    public StudentDaoImpl() {
        studentList.add(new Student("1", 1));
        studentList.add(new Student("2", 2));
        studentList.add(new Student("3", 3));
        studentList.add(new Student("4", 4));
        studentList.add(new Student("5", 5));
    }

    @Override
    public List<Student> getAllStudents() {
        return studentList;
    }

    @Override
    public Student getStudent(int rollId) {
        for (Student student : studentList) {
            if (student.getRollNo() == rollId) return student;
        }
        return null;
    }

    @Override
    public void updateStudent(int rollId, Student student) {
        for (Student s : studentList) {
            if (s.getRollNo() == rollId) {
                s = student;
            }
        }
    }

    @Override
    public void deleteStudent(int rollId) {
        for (Student s : studentList) {
            if (s.getRollNo() == rollId) {
                studentList.remove(s);
                break;
            }
        }
    }

}
