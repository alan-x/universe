package com.lyx.collection;

import java.util.*;
import java.util.function.Consumer;

public class AddingGoups {
    public static void main(String[] args) {
        Collection<Integer>collection=new ArrayList<>(Arrays.asList(1,2,3,4,5));
        Integer[] moreInts={6,7,8};
        collection.addAll(Arrays.asList(moreInts));
        Collections.addAll(collection,11,12,13,14,15);
        Collections.addAll(collection,moreInts);
        collection.forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer integer) {
                System.out.println(integer);
            }
        });
        List<Integer>list=Arrays.asList(16,17,18,19,20);
        list.set(1,99);
        list.forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer integer) {
                System.out.println(integer);
            }
        });
    }
}
