package com.lyx.template;

public abstract class Game {

    abstract void initialize();

    abstract void starPlay();

    abstract void endPlay();

    public final void play() {
        initialize();
        starPlay();
        endPlay();
    }
}
