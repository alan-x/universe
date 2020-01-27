package com.lyx.transferobject;

public class TransferObjectPattern {
    public static void main(String[] args) {
        StudentBO studentBO = new StudentBO();
        for (StudentVO studentVO : studentBO.getStudentVOList()) {
            System.out.println(studentVO.getName() + ":" + studentVO.getRollNo());
        }

        StudentVO hello = new StudentVO("hello", 3);
        studentBO.getStudentVOList().add(hello);



    }
}
