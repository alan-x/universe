package com.lyx.prototype;

/**
 * Created by FollowWinter on 10/1/16.
 */
public class Rectangle extends Shape {
    public Rectangle(){
        type="Rectangle";
    }
    @Override
    void draw() {
        System.out.println("Rectangle draw");
    }
}
