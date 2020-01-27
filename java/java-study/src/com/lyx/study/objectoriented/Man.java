package com.lyx.study.objectoriented;

public class Man extends Person {
    public Man() {

    }

    public Man(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    void sayHello() {
        System.out.println("hello " + name);
    }
    void sayHello(String name){
        System.out.println("hello " + name);
    }

}
