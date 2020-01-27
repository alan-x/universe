package com.lyx.generics;

import java.util.ArrayList;

public class ErasedTypeEquivalence {
    public static void main(String[] args) {
        Class<? extends ArrayList> aClass = new ArrayList<String>().getClass();
        Class<? extends ArrayList> aClass1 = new ArrayList<Integer>().getClass();
        System.out.println((aClass == aClass1) + "");
    }
}
