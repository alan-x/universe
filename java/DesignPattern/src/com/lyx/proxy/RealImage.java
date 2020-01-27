package com.lyx.proxy;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class RealImage implements Image {
    @Override
    public void display() {
        System.out.println("image001");
    }
}
