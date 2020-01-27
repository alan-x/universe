package com.lyx.collection;

import java.util.LinkedList;

class Stack<T> {
    private LinkedList<T> storage = new LinkedList<>();

    public void push(T v) {
        storage.addFirst(v);
    }

    public T pop() {
        return storage.removeFirst();
    }

    public boolean empty() {
        return storage.isEmpty();
    }

    @Override
    public String toString() {
        return storage.toString();
    }
}

public class StackTest {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<String>();
        for (String s : "fuck your fuck".split(" ")) {
            stack.push(s);
        }
        while (!stack.empty()) {
            System.out.println(stack.pop());
        }
    }
}
