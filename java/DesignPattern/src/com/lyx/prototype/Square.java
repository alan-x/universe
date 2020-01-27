package com.lyx.prototype;

/**
 * Created by FollowWinter on 10/1/16.
 */
public class Square extends Shape {
    public Square(){
        type="Square";
    }
    @Override
    void draw() {
        System.out.println("Square draw");
    }
}
