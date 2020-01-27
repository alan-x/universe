package com.lyx.transferobject;

import java.util.ArrayList;
import java.util.List;

public class StudentBO {
    List<StudentVO> studentVOList;

    public StudentBO() {
        studentVOList = new ArrayList<>();
        StudentVO robert = new StudentVO("Robert", 0);
        StudentVO john = new StudentVO("John", 1);
        studentVOList.add(robert);
        studentVOList.add(john);

    }

    public StudentVO getStudentVO(int rollId) {
        return studentVOList.get(rollId);
    }

    public List<StudentVO> getStudentVOList() {
        return this.studentVOList;
    }

    public void deleteStudent(int rollId) {
        studentVOList.remove(rollId);
    }

    public void updateStudent(int rollId, StudentVO studentVO) {
        studentVOList.set(rollId, studentVO);
    }
}
