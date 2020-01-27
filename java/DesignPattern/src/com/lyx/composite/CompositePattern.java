package com.lyx.composite;

public class CompositePattern {
    public static void main(String[] args) {
        Employee ceo = new Employee("CEO", "刘德华", 100000 + "");
        Employee cto = new Employee("CTO", "成龙", 100000 + "");

        Employee e1 = new Employee("e", "e1", 100 + "");
        Employee e2 = new Employee("e", "e2", 100 + "");

        Employee t1 = new Employee("t", "t1", 100 + "");
        Employee t2 = new Employee("t", "t2", 100 + "");

        ceo.add(e1);
        ceo.add(e2);

        cto.add(t1);
        cto.add(t2);

        System.out.println(ceo.toString());
        System.out.println(cto.toString());
    }
}
