### 一、面向接口编程
在做一个项目的时候，为了实现一个功能，我们总是会将它先封装成一个类--当然这是面向对象语言的共识啊，封装嘛！例如：我们要实现一个Circle，他的功能是绘制一个圆。于是我们写了一个类
```
/**
 * Created by FollowWinter on 9/27/16.
 */
public class Circle {
    public void draw() {
        System.out.println("Circle draw");
    }
}
```
后来发现，我们还需要其他的图形，比如Square、Rectangle,于是我们就接着写了两个类：
```
/**
 * Created by FollowWinter on 9/27/16.
 */
public class Rectangle {
    public void draw() {
        System.out.println("Rectangle draw");
    }
}

/**
 * Created by FollowWinter on 9/27/16.
 */
public class Square{
    public void draw() {
        System.out.println("Square draw");
    }
}

```
添加了这三个之后，我们就发现了一些东西，这三个都是属于绘制图形的类，他们之间唯一的不同只是绘制图形的不同，于是我们抽象出了一个共同的父类：
```
/**
 * Created by FollowWinter on 9/27/16.
 */
public class Shap {
    void  draw(){}
}
```
同时让Circle、Rectangle、Square继承并且重写draw方法，这是个好方法，但是这时我们可以看出，Shap中并没有具体的实现，所以用接口更好，同时也更加的清晰明了。当我们需要添加新的类的时候，只要遵守接口中的方法，便可以编写出新的功能，但是不改变类的调用形式。
而在调用的时候我们便可以这么调用：
```
        Shap circle=new Circle();
        circle.draw();
        Shap square=new Square();
        square.draw();
        Shap rectangle=new Rectangle();
        rectangle.draw();
```

### 二、工厂方法
---
如上面向接口的使用地方很多，比如多种数据库的链接、支付方式的选择等等，但是上面的方式依旧存在一些问题，例如我们想要调用Square.draw()必须知道Square这个类名，如果类名错误则无法实例化，所以提出了工厂模式，用于屏蔽类的选择
添加ShapFactory：

```
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
```
调用：


        ShapeFactory shapeFactory=new ShapeFactory();
        Shape circle2=shapeFactory.getShap(ShapeFactory.SHAPE_CIRCLE);
        circle2.draw();

        Shape square2=shapeFactory.getShap(ShapeFactory.SHAPE_SQUARE);
        square2.draw();

        Shape rectangle2=shapeFactory.getShap(ShapeFactory.SHAPE_RECTANGLE);
        rectangle2.draw();