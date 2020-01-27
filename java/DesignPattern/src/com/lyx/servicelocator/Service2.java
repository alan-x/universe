package com.lyx.servicelocator;

public class Service2 implements Service {
    @Override
    public String getName() {
        return "service2";
    }

    @Override
    public void execute() {
        System.out.println("service2 execute");
    }
}
