package com.lyx.interceptingfilter;

public class DebugFilter implements Filter {

    @Override
    public void execute(String request) {
        System.out.println("DebugFilter");
    }
}
