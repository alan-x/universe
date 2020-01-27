package com.lyx.chainofresponsibility;

public class ErrorLogger extends AbstractLogger {

    public ErrorLogger(int level) {
        this.level = level;
    }
    @Override
    protected void write(String message) {
        System.out.println(this.getClass().getName() + ":" + message);
    }
}
