package com.lyx.abstractfactory;

import com.lyx.abstractfactory.color.ColorFactory;
import com.lyx.abstractfactory.shap.ShapFactory;
import com.lyx.factory.ShapeFactory;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class FactoryProducer {
    public static final String FACTORY_SHAP="SHAP";
    public static final String FACTORY_COLOR="COLOR";
    public static AbstractFactory getFactory(String factoryShap){
        switch (factoryShap){
            case FACTORY_COLOR:{
                return new ColorFactory();
            }
            case FACTORY_SHAP:{
                return new ShapFactory();
            }
        }
        return null;
    }
}
