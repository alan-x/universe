package com.lyx.collection;

import java.util.AbstractCollection;
import java.util.Iterator;

public class CollectionSequence extends AbstractCollection<Apple> {
    private Apple[] apples = new Apple[]{new Apple(), new Apple(), new Apple()};

    @Override
    public Iterator<Apple> iterator() {
        return new Iterator<Apple>() {
            private int index=0;
            @Override
            public boolean hasNext() {
                return index<apples.length;
            }

            @Override
            public Apple next() {
                return apples[index++];
            }
        };
    }

    @Override
    public int size() {
        return apples.length;
    }

    public static void main(String[] args) {
        CollectionSequence collectionSequence=new CollectionSequence();
        InterfaceVsIterator.display(collectionSequence);
        InterfaceVsIterator.display(collectionSequence.iterator());
    }
}
