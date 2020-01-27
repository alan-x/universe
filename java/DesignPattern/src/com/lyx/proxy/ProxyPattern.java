package com.lyx.proxy;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class ProxyPattern  {
    public static void main(String args[]){
        Image image=new ProxyImage();
        image.display();
    }
}
