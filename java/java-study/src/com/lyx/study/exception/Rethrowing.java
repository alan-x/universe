package com.lyx.exception;

public class Rethrowing {
    static void f() throws Exception {
        System.out.println("originated the exception in f()");
        throw new Exception("thrown from f()");
    }

    static void g() throws Exception {
        try {
            f();
        } catch (Exception e) {
            System.out.println("inside g()");
            e.printStackTrace(System.out);
            throw e;
        }
    }

    static void h() throws Exception {
        try {
            g();
        } catch (Exception e) {
            System.out.println("inside h()");
            e.printStackTrace(System.out);
            throw e;
        }
    }

    public static void main(String[] args) {
        try {
            g();
        } catch (Exception e) {
            System.out.println("main");
            e.printStackTrace(System.out);
        }

        try {
            h();
        } catch (Exception e) {
            System.out.println("main");
            e.printStackTrace();
        }
    }
}
