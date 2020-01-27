package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton2 {
    private static Singleton2 singleton;
    private Singleton2(){};
    public static Singleton2 getInstance() {
        if (singleton==null){
            singleton=new Singleton2();
        }
        return singleton;
    }
}
