package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton {

    private static Singleton singleton=new Singleton();

    private Singleton(){}

    public static Singleton getInstance() {
        return singleton;
    }

    public void sayHello(){
        System.out.println("Hello Singleton");
    }

}
