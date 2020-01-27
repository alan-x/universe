package com.lyx.study.objectoriented;

public class ObjectOriented {
    public static void main(String args[]) {
        Person person = new Person();
        person.sayHello();

        Man man = new Man();
        man.sayHello();

        Man man2 = new Man("John", 1);
        man2.sayHello();
        man2.sayHello("lily");

    }
}
