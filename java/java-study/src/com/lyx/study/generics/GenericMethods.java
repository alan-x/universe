package com.lyx.generics;

import sun.rmi.rmic.Generator;

public class GenericMethods {
    public <T> void f(T x){
        System.out.println(x.getClass().getName());
    }

    public static void main(String[] args) {
        GenericMethods genericMethods = new GenericMethods();
        genericMethods.f("");
        genericMethods.f(1);
        genericMethods.f(1.0);
        genericMethods.f(1.0f);
        genericMethods.f('c');
        genericMethods.f(genericMethods);
    }
}
