package com.lyx.enums;

enum Shrubbery {GROUND, CRAWLING, HANGING}

public class EnumClass {
    public static void main(String[] args) {
        for (Shrubbery shrubbery : Shrubbery.values()) {
            System.out.println(shrubbery.ordinal());
            System.out.println(shrubbery.compareTo(Shrubbery.GROUND));
            System.out.println(shrubbery.equals(Shrubbery.GROUND));
            System.out.println(shrubbery == Shrubbery.GROUND);
            System.out.println(shrubbery.getDeclaringClass());
            System.out.println(shrubbery.name());
            System.out.println("---");
        }
        for (String s : "GROUND CRAWLING HANGING".split(" ")) {
            Shrubbery shrubbery = Enum.valueOf(Shrubbery.class, s);
            System.out.println(shrubbery);
        }
    }
}
