package com.lyx.builder;

/**
 * Created by FollowWinter on 9/30/16.
 */
public class VegBurger extends Burger {
    @Override
    public String name() {
        return "VegBurger";
    }

    @Override
    public float price() {
        return 25;
    }
}
