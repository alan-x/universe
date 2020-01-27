package com.lyx.string;

public class IntegerMatch {
    public static void main(String[] args) {
        System.out.println("-1234".matches("-?\\d+"));
        for (String s : "hello world".split(" w")) {
            System.out.println(s);
        }
    }
}
