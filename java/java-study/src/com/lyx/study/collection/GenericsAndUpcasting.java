package com.lyx.collection;

import java.util.ArrayList;
import java.util.function.Consumer;


class GrannySmith extends Apple{}
class Gala extends Apple{}
class Fuji extends Apple{}
class Braeburn extends Apple{}


public class GenericsAndUpcasting {
    public static void main(String[] args) {
        ArrayList<Apple> apples = new ArrayList<>();
        apples.add(new GrannySmith());
        apples.add(new Gala());
        apples.add(new Fuji());
        apples.add(new Braeburn());
        apples.forEach(new Consumer<Apple>() {
            @Override
            public void accept(Apple apple) {
                System.out.println(apple);
            }
        });

    }
}
