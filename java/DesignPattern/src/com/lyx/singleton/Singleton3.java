package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton3 {

    private static Singleton3 singleton=new Singleton3();

    private Singleton3(){}

    public static synchronized Singleton3  getInstance() {
        return singleton;
    }

    public void sayHello(){
        System.out.println("Hello Singleton");
    }

}
