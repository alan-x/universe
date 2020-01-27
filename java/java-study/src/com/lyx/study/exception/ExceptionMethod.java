package com.lyx.exception;

public class ExceptionMethod {
    public static void main(String[] args) {
        try {
            throw new Exception("My Exception");
        } catch (Exception e) {
            System.out.println("catch exception");
            System.out.println(e.getMessage());
            System.out.println(e.getLocalizedMessage());
            System.out.println(e);
            e.printStackTrace(System.out);
        }
    }
}
