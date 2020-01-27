package com.lyx.builder;

/**
 * Created by FollowWinter on 9/30/16.
 */
public class ChickenBurger extends Burger {
    @Override
    public String name() {
        return "ChickenBurger";
    }

    @Override
    public float price() {
        return 50;
    }
}
