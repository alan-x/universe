> talk is cheap,show me the code -- 对这个模式其实不太了解，日后实践的时候再研究！Mark

---
- 添加`shap`工厂

```
//Shap.java
package com.lyx.abstractfactory.shap;

/**
 * Created by FollowWinter on 9/27/16.
 */
public interface Shape {
    void  draw();
}


//Circle.java
package com.lyx.abstractfactory.shap;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Circle draw");
    }
}


//Rectangle.java
package com.lyx.abstractfactory.shap;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Rectangle draw");
    }
}


//Square.java
package com.lyx.abstractfactory.shap;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Square draw");
    }
}




```

- 添加`color`系列方法

```
//Color.java
package com.lyx.abstractfactory.color;

/**
 * Created by FollowWinter on 9/28/16.
 */
public  interface Color {
    public void fill();
}


//Gray.java
package com.lyx.abstractfactory.color;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class Gray implements Color {
    @Override
    public void fill() {
        System.out.println("fille gray");
    }
}

//Red.java
package com.lyx.abstractfactory.color;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class Red implements Color {
    @Override
    public void fill() {
        System.out.println("fille red");
    }
}

//Gray.java
package com.lyx.abstractfactory.color;

/**
 * Created by FollowWinter on 9/28/16.
 */
public class Blue implements Color {
    @Override
    public void fill() {
        System.out.println("fille blue");
    }
}

```

- 添加虚拟工厂类并为各个工厂提供实现类

```
//AbstractFactory.java
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



//ColorFactory.java
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


//ShapFactory.java

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

```

- 创建工厂生成器

```

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

```

- 使用

```
package com.lyx.abstractfactory;

import com.lyx.abstractfactory.shap.Circle;
import com.lyx.abstractfactory.shap.Rectangle;
import com.lyx.abstractfactory.shap.Shape;
import com.lyx.abstractfactory.shap.Square;

/**
 * Created by FollowWinter on 9/27/16.
 */
public class FactoryPattern {
    public static void main(String[] args){

    }
}

```