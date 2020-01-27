package com.lyx.abstractfactory.color;

import com.lyx.abstractfactory.AbstractFactory;
import com.lyx.abstractfactory.shap.Shape;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class ColorFactory extends AbstractFactory {
    public static final String COLOR_BLUE="BLUE";
    public static final String COLOR_RED="RED";
    public static final String COLOR_GRAY="GRAY";


    @Override
    public Color getColor(String colorType) {
        switch (colorType){
            case COLOR_BLUE:{
                return  new Blue();
            }
            case COLOR_RED:{
                return new Red();
            }
            case COLOR_GRAY:{
                return new Gray();
            }
            default:{
                return null;
            }
        }

    }

    @Override
    public Shape getShape(String shapeType) {
        return null;
    }
}
