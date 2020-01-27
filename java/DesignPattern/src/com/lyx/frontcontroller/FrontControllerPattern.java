package com.lyx.frontcontroller;

public class FrontControllerPattern {
    public static void main(String[] args) {
        FrontController frontController = new FrontController();
        frontController.dispatchRequest("STUDENT_VIEW");
        frontController.dispatchRequest("HOME_VIEW");
    }
}
