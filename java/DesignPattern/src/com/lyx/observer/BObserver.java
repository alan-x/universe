package com.lyx.observer;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class BObserver extends Observer {
    public BObserver(Subject subject){
        this.subject = subject;
        this.subject.assignObserver(this);
    }
    @Override
    public void update() {
        System.out.println("B"+this.subject.getState());
    }
}
