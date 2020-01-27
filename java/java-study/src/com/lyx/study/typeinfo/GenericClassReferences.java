package com.lyx.typeinfo;

public class GenericClassReferences {
    public static void main(String[] args) {
        Class intClass = int.class;
        Class<Integer> genericClass = int.class;
        genericClass = intClass;
        intClass = double.class;
    }
}
