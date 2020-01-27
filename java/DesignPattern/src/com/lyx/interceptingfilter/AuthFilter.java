package com.lyx.interceptingfilter;

public class AuthFilter implements Filter {

    @Override
    public void execute(String request) {
        System.out.println("Auth Filter");
    }
}
