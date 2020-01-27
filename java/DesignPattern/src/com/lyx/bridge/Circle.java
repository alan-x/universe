package com.lyx.bridge;

public class Circle extends Shape {
    int radius;
    int x;
    int y;

    public Circle(DrawApi drawApi, int radius, int x, int y) {
        super(drawApi);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    @Override
    public void draw() {
        this.drawApi.draw(radius, x, y);
    }
}
