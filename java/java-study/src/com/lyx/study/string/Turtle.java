package com.lyx.string;

import java.io.PrintStream;
import java.util.Formatter;

public class Turtle {
    private String name;
    private Formatter formatter;

    public Turtle(String name, Formatter formatter) {
        this.name = name;
        this.formatter = formatter;
    }

    public void move(int x, int y) {
        formatter.format("%s at(%d,%d)",name, x, y);
    }

    public static void main(String[] args) {
        PrintStream printStream=System.out;
        Turtle tommy=new Turtle("tommy",new Formatter(System.out));
        Turtle terry=new Turtle("terry",new Formatter(System.out));
        tommy.move(0,1);
        terry.move(2,1);
        tommy.move(2,5);
        terry.move(4,3);
    }
}
