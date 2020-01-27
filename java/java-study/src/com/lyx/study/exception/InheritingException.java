package com.lyx.exception;

class SimpleException extends Exception {

}

public class InheritingException {
    public void f() throws SimpleException {
        System.out.println("throw SimpleException from f()");
        throw new SimpleException();
    }

    public static void main(String[] args) {
        try {
            new InheritingException().f();
        } catch (SimpleException e) {
            System.out.println("catch it!");
        }
    }
}
