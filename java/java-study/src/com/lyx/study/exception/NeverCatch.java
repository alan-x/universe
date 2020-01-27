package com.lyx.exception;

public class NeverCatch {
    static void f(){
        throw new RuntimeException();
    }
    static void g(){
        f();
    }

    public static void main(String[] args) {
        g();
    }
}
