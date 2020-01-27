package com.lyx.dataacessobject;

import java.util.List;

public interface StudentDao {
    public List<Student> getAllStudents();

    public Student getStudent(int rollId);

    public void updateStudent(int rollId, Student student);

    public void deleteStudent(int rollId);
}
