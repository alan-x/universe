package com.lyx.fecade;

public class FacadePattern {
    public static void main(String[] args) {
        ShapeMaker shapeMaker=new ShapeMaker();
        shapeMaker.getCircle().draw();
        shapeMaker.getRectangle().draw();
        shapeMaker.getSquare().draw();
    }
}
