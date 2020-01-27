package com.lyx.prototype.simple;

/**
 * Created by FollowWinter on 10/1/16.
 */
public class RealProtorype implements Prototype {
    @Override
    public Object clone() {
        Prototype prototype=new RealProtorype();
        return prototype;
    }
}
