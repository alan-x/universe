package com.lyx.state;

public class StartState implements State {

    @Override
    public void doAction(Context context) {
        System.out.println("player is start");
        context.setState(this);

    }

    @Override
    public String toString() {
        return "Start State";
    }
}
