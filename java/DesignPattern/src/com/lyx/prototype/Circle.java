package com.lyx.prototype;


/**
 * Created by FollowWinter on 10/1/16.
 */
public class Circle extends Shape {
    public Circle(){
        type="Circle";
    }
    @Override
    public void draw() {
        System.out.println("Circle draw");
    }
}
