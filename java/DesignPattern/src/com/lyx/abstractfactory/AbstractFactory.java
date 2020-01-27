package com.lyx.abstractfactory;
import  com.lyx.abstractfactory.color.*;
import com.lyx.abstractfactory.shap.Shape;

/**
 * Created by FollowWinter on 9/28/16.
 */
public abstract class AbstractFactory {

    public abstract Color getColor(String colorType);
    public abstract Shape getShape(String shapeType);
}
