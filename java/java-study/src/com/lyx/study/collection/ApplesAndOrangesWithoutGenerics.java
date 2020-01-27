package com.lyx.collection;

import java.util.ArrayList;

class Apple {
    private static long counter;
    private final long id = counter++;

    public long id() {
        return id;
    }

    @Override
    public String toString() {
        return id()+"";
    }
}

class Orange {
}

public class ApplesAndOrangesWithoutGenerics {
    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
//        ArrayList apples=new ArrayList();
//        for (int i = 0; i < 3; i++) {
//            apples.add(new Apple());
//        }
//        apples.add(new Orange());
//        for (int i = 0; i < apples.size(); i++) {
//            ((Apple)apples.get(i)).id();
//        }

        ArrayList<Apple> apples = new ArrayList();
        for (int i = 0; i < 3; i++) {
            apples.add(new Apple());
        }
//        apples.add(new Orange());
        for (int i = 0; i < apples.size(); i++) {
            System.out.println(apples.get(i).id());
        }
    }
}
