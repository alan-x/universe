package com.lyx.collection;

import java.util.Random;
import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetOfInteger {
    public static void main(String[] args) {
        Random random=new Random(47);
        SortedSet<Integer>intset=new TreeSet<>();
        for (int i = 0; i < 1000; i++) {
            intset.add(random.nextInt(30));
        }
        System.out.println(intset);
    }
}
