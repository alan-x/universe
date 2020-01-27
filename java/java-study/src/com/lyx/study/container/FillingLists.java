package com.lyx.container;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class StringAddress {
    private String s;

    public StringAddress(String s) {
        this.s = s;
    }

    @Override
    public String toString() {
        return "StringAddress@" + super.toString() + "{" +
                "s='" + s + '\'' +
                '}';
    }
}

public class FillingLists {
    public static void main(String[] args) {
        List<StringAddress> list = new ArrayList<>(Collections.nCopies(4, new StringAddress("hello")));
        System.out.println(list);
        Collections.fill(list, new StringAddress("World"));
        System.out.println(list);
    }
}
