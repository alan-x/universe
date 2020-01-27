package com.lyx.exception;

public class MultipReturns {
    public static void f(int i) {
        try {
            System.out.println("begin");
            System.out.println(1);
            if (i == 1) return;
            System.out.println(2);
            if (i == 2) return;
            System.out.println(3);
            if (i == 3) return;
            return;
        } finally {
            System.out.println("finally");
        }
    }

    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            f(i);
        }
    }
}
