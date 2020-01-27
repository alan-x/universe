package com.lyx.template;

public class Football extends Game {

    @Override
    void initialize() {
        System.out.println("Football initialize()");
    }

    @Override
    void starPlay() {
        System.out.println("Football startPlay()");
    }

    @Override
    void endPlay() {
        System.out.println("Football endPlay()");
    }
}
