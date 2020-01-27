package com.lyx.generics;

public class ThreeTuple<A,B,C> extends TwoTuple<A,B> {
    private final C c;
    public ThreeTuple(A first, B second, C c) {
        super(first, second);
        this.c = c;
    }
}
