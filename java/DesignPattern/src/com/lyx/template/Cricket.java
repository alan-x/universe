package com.lyx.template;

public class Cricket extends Game {

    @Override
    void initialize() {
        System.out.println("Cricket initialize()");
    }

    @Override
    void starPlay() {
        System.out.println("Cricket startPlay()");
    }

    @Override
    void endPlay() {
        System.out.println("Cricket endPlay()");
    }
}
