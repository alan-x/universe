package com.lyx.collection;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class SetOperation {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        Collections.addAll(set, "A,B,C,D,E,F,G".split(","));
        set.add("H");
        System.out.println(set);
        Set<String> set1 = new HashSet<>();
        Collections.addAll(set1, "A,B,C,D".split(","));
        System.out.println(set1);
        System.out.println(set.containsAll(set1));

    }
}
