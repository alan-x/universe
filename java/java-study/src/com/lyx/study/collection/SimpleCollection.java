package com.lyx.collection;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.function.Consumer;

public class SimpleCollection {
    public static void main(String[] args) {
        Collection<Integer>c=new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            c.add(i);
        }
        c.forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer integer) {
                System.out.println(integer);
            }
        });
    }
}
