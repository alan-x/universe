package com.lyx.flyweight;


public class FlyweightPattern {
    private static final String[] colors = {
            "red", "green", "black"
    };

    public static void main(String[] args) {
        for (int i = 0; i < 20; i++) {
            Circle circle = (Circle) ShapeFactory.getCircle(colors[(int) (Math.random() * colors.length)]);
            circle.setX(i);
            circle.setY(i);
            circle.setRadius(i);
            System.out.println(circle);
        }
    }
}
