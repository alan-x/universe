package com.lyx.mediator;

public class MediatorPattern {
    public static void main(String[] args) {
        User john = new User("john");
        User jack = new User("jack");
        john.sendMessage("hello");
        jack.sendMessage("hello");
    }
}
