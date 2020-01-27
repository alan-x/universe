package com.lyx.factory;

import com.lyx.factory.shap.Circle;
import com.lyx.factory.shap.Rectangle;
import com.lyx.factory.shap.Shape;
import com.lyx.factory.shap.Square;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class ShapeFactory {
    public static final int SHAPE_SQUARE=1;
    public static final int SHAPE_CIRCLE=2;
    public static final int SHAPE_RECTANGLE=3;

    public Shape getShap(int shapType){
        switch (shapType){
            case SHAPE_CIRCLE:
                return new Circle();
            case SHAPE_RECTANGLE:
                return new Rectangle();
            case SHAPE_SQUARE:
                return new Square();
            default:
                return null;
        }

    }
}
