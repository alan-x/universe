package com.lyx.builder;

/**
 * Created by FollowWinter on 9/30/16.
 */
public class Coke extends ColdDrink {
    @Override
    public String name() {
        return "Coke";
    }

    @Override
    public float price() {
        return 30;
    }
}
