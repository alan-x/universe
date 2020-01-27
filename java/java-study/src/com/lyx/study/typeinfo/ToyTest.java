package com.lyx.typeinfo;

interface HasBatteries {

}

interface Waterproof {

}

interface Shoots {

}

class Toy {
    public Toy() {
    }

    public Toy(int i) {

    }
}

class FancyToy extends Toy implements HasBatteries, Waterproof, Shoots {
    public FancyToy() {
        super(1);
    }
}

public class ToyTest {
    static void printInfo(Class cc){
        System.out.println(cc.getName());
        System.out.println(cc.isInterface());
        System.out.println(cc.getSimpleName());
        System.out.println(cc.getCanonicalName());
    }
    public static void main(String[] args) {
        Class c=null;
        try {
            c=Class.forName("com.lyx.typeinfo.FancyToy");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        printInfo(c);
        for (Class aClass : c.getInterfaces()) {
            printInfo(aClass);
        }
        Class up=c.getSuperclass();
        Object object=null;
        try {
            object=up.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        printInfo(object.getClass());
    }
}
