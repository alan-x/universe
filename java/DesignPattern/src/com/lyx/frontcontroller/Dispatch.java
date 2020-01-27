package com.lyx.frontcontroller;

public class Dispatch {
    private static HomeView homeView;
    private static StudentView studentView;

    public Dispatch() {
        homeView = new HomeView();
        studentView = new StudentView();
    }

    public void dispatch(String request) {
        switch (request) {
            case "HOME_VIEW": {
                homeView.show();
                break;
            }
            case "STUDENT_VIEW": {
                studentView.show();
                break;
            }
            default:{
                break;
            }
        }
    }
}
