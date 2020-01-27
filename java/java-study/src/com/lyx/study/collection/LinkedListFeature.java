package com.lyx.collection;

import java.util.LinkedList;
import java.util.function.Consumer;

public class LinkedListFeature {
    public static void main(String[] args) {
        LinkedList<Apple> apples = new LinkedList<>();
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        apples.add(new Apple());
        System.out.println(apples);

        System.out.println(apples.get(1));
        System.out.println(apples.getFirst());
        System.out.println(apples.getLast());
        System.out.println(apples.peek());
        System.out.println(apples.remove());
        System.out.println(apples.removeFirst());
        System.out.println(apples);
        System.out.println(apples.removeLast());
        System.out.println(apples);
        System.out.println(apples.remove(2));
        System.out.println(apples);
        apples.addFirst(new Apple());
        System.out.println(apples);
        apples.addLast(new Apple());
        System.out.println(apples);


    }
}
