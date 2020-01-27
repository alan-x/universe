package com.lyx.collection;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SimpleIteration {
    public static void main(String[] args) {
        List<Apple> apples = new ArrayList<>();
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        Iterator<Apple> iterator = apples.iterator();
        while (iterator.hasNext()) {
            Apple next = iterator.next();
            System.out.print(next.id());
        }
        System.out.println();
        for (Apple apple : apples) {
            System.out.print(apple.id());
        }
        System.out.println();
        iterator = apples.iterator();
        for (int i = 0; i < 2; i++) {
            iterator.next();
            iterator.remove();

        }
        for (Apple apple : apples) {
            System.out.print(apple.id());
        }
        System.out.println();

    }
}
