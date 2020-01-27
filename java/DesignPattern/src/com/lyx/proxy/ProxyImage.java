package com.lyx.proxy;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class ProxyImage implements Image {
    Image image;

    @Override
    public void display() {
        if (image==null){
            image=new RealImage();
        }
        image.display();
    }
}
