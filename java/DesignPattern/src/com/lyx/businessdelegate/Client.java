package com.lyx.businessdelegate;

public class Client {
    BusinessDelegate businessDelegate;

    public Client(BusinessDelegate businessDelegate) {
        this.businessDelegate = businessDelegate;
    }

    public void doTast() {
        businessDelegate.doTask();
    }
}
