package com.lyx.collection;

import java.util.Iterator;

public class IterableClass implements Iterable<Apple> {
    Apple[] apples = new Apple[]{new Apple(), new Apple(), new Apple()};



    public static void main(String[] args) {
        for (Apple apple : new IterableClass()) {
            System.out.println(apple);
        }
    }

    @Override
    public Iterator<Apple> iterator() {
        final int[] index = {0};

        return new Iterator<Apple>() {
            @Override
            public boolean hasNext() {
                return index[0] < apples.length;
            }

            @Override
            public Apple next() {
                return apples[index[0]++];
            }
        };
    }
}
