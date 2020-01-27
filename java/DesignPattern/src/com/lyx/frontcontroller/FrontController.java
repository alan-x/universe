package com.lyx.frontcontroller;

public class FrontController {
    private Dispatch dispatch;

    public FrontController() {
        dispatch = new Dispatch();
    }

    public void dispatchRequest(String request) {
        System.out.println(request);
        this.dispatch.dispatch(request);
    }
}
