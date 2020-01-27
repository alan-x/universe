package com.lyx.abstractfactory.shap;

import com.lyx.abstractfactory.AbstractFactory;
import com.lyx.abstractfactory.color.Color;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class ShapFactory extends AbstractFactory {
    public static final String SHAP_CIRCLE="CIRCLE";
    public static final String SHAP_RECTANGLE="RECTANGLE";
    public static final String SHAP_SQUARE="SQUARE";

    @Override
    public Color getColor(String colorType) {
        return null;
    }

    @Override
    public Shape getShape(String shapeType) {
        switch (shapeType){
            case SHAP_CIRCLE:{
                return new Circle();
            }
            case SHAP_RECTANGLE:{
                return new Rectangle();
            }
            case SHAP_SQUARE:{
                return  new Square();
            }

            default:
                return null;
        }
    }
}
