package com.lyx.prototype.simple;

/**
 * Created by FollowWinter on 10/1/16.
 */
public class Client  {
    private Prototype prototype;
    Client(Prototype prototype){
        this.prototype=prototype;
    }
    public void opration(Prototype ex){
        Prototype prototype= (Prototype) this.prototype.clone();
    }
}
