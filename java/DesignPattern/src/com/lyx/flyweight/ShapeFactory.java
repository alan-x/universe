package com.lyx.flyweight;

import java.util.HashMap;

public class ShapeFactory {
    private static final HashMap<String, Shape> cirleMap = new HashMap<>();

    public static Shape getCircle(String color) {
        Circle circle = (Circle) cirleMap.get(color);
        if (circle == null) {
            circle = new Circle(color);
            cirleMap.put(color, circle);
            System.out.println("create circle with color:" + color);
        }
        return circle;
    }
}
