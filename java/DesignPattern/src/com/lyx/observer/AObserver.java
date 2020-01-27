package com.lyx.observer;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class AObserver extends Observer {
    public AObserver(Subject subject) {
        this.subject = subject;
        this.subject.assignObserver(this);
    }

    @Override
    public void update() {
        System.out.println("A" + this.subject.getState());
    }
}
