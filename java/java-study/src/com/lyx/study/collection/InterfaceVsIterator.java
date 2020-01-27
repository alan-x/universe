package com.lyx.collection;

import java.util.*;

public class InterfaceVsIterator {
    public static void display(Iterator<Apple> iterator) {
        while (iterator.hasNext()) {
            Apple apple = iterator.next();
            System.out.print(apple);

        }
        System.out.println();
    }

    public static void display(Collection<Apple> apples) {
        for (Apple apple : apples) {
            System.out.print(apple);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        List<Apple> appleList = new ArrayList<>();
        appleList.add(new Apple());
        appleList.add(new Apple());
        appleList.add(new Apple());
        appleList.add(new Apple());
        appleList.add(new Apple());

        Set<Apple> appleSet = new HashSet<>(appleList);
        Map<String, Apple> appleMap = new LinkedHashMap<>();
        String[] names = "A,B,C,D,E".split(",");
        for (int i = 0; i < names.length; i++) {
            appleMap.put(names[i], appleList.get(i));
        }
        display(appleList);
        display(appleSet);
        display(appleList.iterator());
        display(appleSet.iterator());
        System.out.println(appleMap);
        System.out.println(appleMap.keySet());
        display(appleMap.values());
        display(appleMap.values().iterator());
    }
}
