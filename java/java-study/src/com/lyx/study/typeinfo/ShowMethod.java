package com.lyx.typeinfo;


import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class ShowMethod {

    public static void main(String[] args) throws ClassNotFoundException {

        Class<?> c = Class.forName("com.lyx.typeinfo.ShowMethod");

        System.out.println("methods");
        for (Method method : c.getMethods()) {
            System.out.println(method.toString());
        }

        System.out.println("constructors");
        for (Constructor<?> constructor : c.getConstructors()) {
            System.out.println(constructor.toString());
        }
    }

}
