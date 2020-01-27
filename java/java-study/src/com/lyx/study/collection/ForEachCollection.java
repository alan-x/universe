package com.lyx.collection;

import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;

public class ForEachCollection {
    public static void main(String[] args) {
        Collection<String> stringCollection = new LinkedList<>();
        String[] fuck = "Fuck you fuck".split(" ");
        Collections.addAll(stringCollection,fuck);
        for (String s : stringCollection) {
            System.out.println(s);
        }
    }
}
