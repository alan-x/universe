package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton4 {

    private static class SingletonHolder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }

    private Singleton4() {
    }

    public static final Singleton4 getInstance() {
        return SingletonHolder.INSTANCE;
    }

    public void sayHello() {
        System.out.println("Hello Singleton");
    }

}
