package com.lyx.factory;

import com.lyx.factory.shap.Circle;
import com.lyx.factory.shap.Rectangle;
import com.lyx.factory.shap.Shape;
import com.lyx.factory.shap.Square;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class FactoryPattern {
    public static void main(String[] args){
        Shape circle=new Circle();
        circle.draw();
        Shape square=new Square();
        square.draw();
        Shape rectangle=new Rectangle();
        rectangle.draw();

        ShapeFactory shapeFactory=new ShapeFactory();
        Shape circle2=shapeFactory.getShap(ShapeFactory.SHAPE_CIRCLE);
        circle2.draw();

        Shape square2=shapeFactory.getShap(ShapeFactory.SHAPE_SQUARE);
        square2.draw();

        Shape rectangle2=shapeFactory.getShap(ShapeFactory.SHAPE_RECTANGLE);
        rectangle2.draw();
    }
}
