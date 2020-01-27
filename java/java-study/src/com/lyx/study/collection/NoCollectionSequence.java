package com.lyx.collection;

import java.util.Iterator;

class AppleSequence {
    protected Apple[] apples = new Apple[]{new Apple(), new Apple()};
}

public class NoCollectionSequence extends AppleSequence {
    public Iterator<Apple> iterator() {
        return new Iterator<Apple>() {
            private int index = 0;

            @Override
            public boolean hasNext() {
                return index < apples.length;
            }

            @Override
            public Apple next() {
                return apples[index++];
            }
        };
    }

    public static void main(String[] args) {
        NoCollectionSequence noCollectionSequence = new NoCollectionSequence();
        InterfaceVsIterator.display(noCollectionSequence.iterator());

    }
}
