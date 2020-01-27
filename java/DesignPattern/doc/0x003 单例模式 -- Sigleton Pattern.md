### 单例模式 -- Singleton Pattern
>  为了避免一个全局使用的类重复的销毁和创建

一、 最简单的单例：

1. 新建一个单例的类：

```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton {

    private static Singleton singleton=new Singleton();

    private Singleton(){}

    public static Singleton getInstance() {
        return singleton;
    }

    public void sayHello(){
        System.out.println("Hello Singleton");
    }

}

```

2. 调用示例：

```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class SingletonPattern {
    public static void main(String args[]){
        Singleton.getInstance().sayHello();
    }
}

```

二、 深入单例：
1. 懒汉式-线程不安全

```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton2 {
    private static Singleton2 singleton;
    private Singleton2(){};
    public static Singleton2 getInstance() {
        if (singleton==null){
            singleton=new Singleton2();
        }
        return singleton;
    }
}

```

2. 饿汉式-线程安全
```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton3 {

    private static Singleton3 singleton=new Singleton3();

    private Singleton3(){}

    public static synchronized Singleton3  getInstance() {
        return singleton;
    }

    public void sayHello(){
        System.out.println("Hello Singleton");
    }

}

```
3. 双检锁/双重校验锁

```
package com.lyx.singleton;
   
   /**
    * Created by FollowWinter on 9/29/16.
    */
   public class Singleton4 {
   
       private volatile static Singleton4 singleton=new Singleton4();
   
       private Singleton4(){}
   
       public static synchronized Singleton4 getInstance() {
           if (singleton == null) {
               synchronized (Singleton4.class) {
                   if (singleton == null) {
                       singleton = new Singleton4();
                   }
               }
           }
           return singleton;
       }
   
       public void sayHello(){
           System.out.println("Hello Singleton");
       }
   
   }

```
4. 登记式、内部静态

```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public class Singleton4 {

    private static class SingletonHolder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }

    private Singleton4() {
    }

    public static final Singleton4 getInstance() {
        return SingletonHolder.INSTANCE;
    }

    public void sayHello() {
        System.out.println("Hello Singleton");
    }

}

```

5. 枚举
```
package com.lyx.singleton;

/**
 * Created by FollowWinter on 9/29/16.
 */
public enum Singleton5 {
    INSTANCE;
    public void whateverMethod() {

    }
}

```

三、 单例模式+工厂模式
> 这么用是因为工厂类总是重复使用，但是没有太大的操作性

```

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



```