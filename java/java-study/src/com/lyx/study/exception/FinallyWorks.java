package com.lyx.exception;

class ThreeException extends Exception {

}

public class FinallyWorks {
    static int count = 0;

    public static void main(String[] args) {
        while (true) {
            try {
                if (count++ == 0)
                    throw new ThreeException();
                System.out.println("no exception");
            } catch (ThreeException e) {
                System.out.println("three exception");
            } finally {
                System.out.println("finally");
                if (count == 2) {
                    break;
                }
            }
        }
    }
}
