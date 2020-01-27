package com.lyx.exception;

class OneException extends Exception {
    public OneException(String message) {
        super(message);
    }
}

class TwoException extends Exception {
    public TwoException(String message) {
        super(message);
    }
}

public class RethrowNew {
    public static void f() throws OneException {
        System.out.println("originating the exception from f()");
        throw new OneException("throw from f()");
    }

    public static void main(String[] args) {
        try {

            try {
                f();
            } catch (OneException e) {
                System.out.println("inner");
                e.printStackTrace(System.out);
                throw new TwoException("from inner try");
            }
        } catch (TwoException e1) {
            System.out.println("out");
            e1.printStackTrace(System.out);
        }
    }
}
