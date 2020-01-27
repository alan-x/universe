package com.lyx.state;

public class StopState implements State {

    @Override
    public void doAction(Context context) {
        System.out.println("player is stop");
        context.setState(this);
    }

    @Override
    public String toString() {
        return "Stop State";
    }
}
