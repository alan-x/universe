package com.lyx.observer;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class Subject {
    private int state;
    private List<Observer>observerList;

    public Subject() {
        this.observerList =new ArrayList<>();

    }
    public void assignObserver(Observer observer){
        this.observerList.add(observer);
    }


    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
        notifyAllObserver();
    }

    public void notifyAllObserver() {
        for (Observer observer :
                observerList) {
            observer.update();
        }
    }

}
