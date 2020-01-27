### 观察者模式 -- Observer Pattern
---
#### 1. 创建观察对象`Subject`
```
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

```

#### 创建观察者`Observer`
```
package com.lyx.observer;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class Observer {
    protected Subject subject;
    public void update(){

    }
}

```

#### 创建观察者实例`AObserver`和`BObserver`
```
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


```
#### 创建测试类`ObserverPattern`
```
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

```