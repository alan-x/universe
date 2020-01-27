package com.lyx.bridge;

public class BridgePattern {
    public static void main(String[] args) {
        Shape redCircle = new Circle(new RedCircle(), 1, 1, 1);
        redCircle.draw();
        Shape greenCircle = new Circle(new GreenCircle(), 2, 2, 2);
        greenCircle.draw();
    }
}
