package com.lyx.collection;


import com.sun.org.apache.bcel.internal.generic.NEW;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.function.Consumer;

public class ListFutures {
    public static void main(String[] args) {
        Random random = new Random(47);
        List<Apple> apples = new ArrayList<>();
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());

        apples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.print(apple.id());
            }
        });
        System.out.println();
        Apple apple = new Apple();
        apples.add(apple);
        System.out.println(apples.indexOf(apple));
        apples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.print(apple.id());
            }
        });
        System.out.println();

        Apple apple1 = new Apple();
        apples.set(apples.indexOf(apple), apple1);
        apples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.print(apple.id());
            }
        });

        System.out.println(apples.remove(apple1));

        apples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.print(apple.id());
            }
        });
        System.out.println();

        List<Apple> subApples = apples.subList(0, 1);
        subApples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.print(apple.id());
            }
        });
        System.out.println();

    }
}
