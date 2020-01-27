package com.lyx.factory;

import com.lyx.singleton.Singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class SingletonShapFactory {
    private static SingletonShapFactory singletonShapFactory=new SingletonShapFactory();
    private SingletonShapFactory(){};

    public static SingletonShapFactory getInstance() {
        return singletonShapFactory;
    }
}
