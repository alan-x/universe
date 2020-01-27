package com.lyx.observer;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class ObserverPattern {
    public static void main(String args[]){
        Subject subject=new Subject();
        AObserver aObserver=new AObserver(subject);
        BObserver bObserver=new BObserver(subject);
        subject.setState(2);
    }



}
