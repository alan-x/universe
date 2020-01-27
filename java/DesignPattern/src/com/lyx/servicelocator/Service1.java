package com.lyx.servicelocator;

public class Service1 implements Service {
    @Override
    public String getName() {
        return "service1";
    }

    @Override
    public void execute() {
        System.out.println("service1 execute");
    }
}
