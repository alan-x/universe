package com.lyx.study.controller;

public class Controller {
    public static void main(String args[]) {

        boolean isSuccess = true;
        if (isSuccess) {
            System.out.println("success");
        }

        if (isSuccess) {
            System.out.println("success");
        } else {
            System.out.println("failure");
        }

        if (isSuccess) {
            System.out.println("success");
        } else if (!isSuccess) {
            System.out.println("failure");
        } else {
            System.out.println("i do know");
        }

        int i = 10;
        while (i != 0) {
            i--;
            System.out.println(i);
        }

        i = 10;
        do {
            i--;
            System.out.println(i);
        } while (i != 0);

        for (i = 0; i < 10; i++) {
            System.out.println(i);
        }

        for (i = 0; i < 10; i++) {
            if (i == 5) break;
            System.out.println(i);
        }

        for (i = 0; i < 10; i++) {
            if (i == 5) continue;
            System.out.println(i);
        }
        for (i = 0; i < 10; i++) {
//            if (i == 5) return;
            System.out.println(i);
        }
        switch (i) {
            case 10: {
                System.out.println(i);
            }
            case 12: {
                System.out.println(12);
                break;
            }
            default: {
                System.out.println("default");
            }
        }
    }
}
