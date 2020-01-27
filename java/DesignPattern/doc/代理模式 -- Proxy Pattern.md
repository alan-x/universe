### 代理模式 -- Proxy Pattern
---
#### 1. 创建实体接口`Image`
```
package com.lyx.proxy;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public interface Image {
    public void display();
}

```
#### 2. 创建实体`RealImage`
```
package com.lyx.proxy;

/**
 * Created by FollowWinter on 11/10/2016.
 */
public class RealImage implements Image {
    @Override
    public void display() {
        System.out.println("image001");
    }
}

```
#### 3. 创建代理实例`ProxyImage`
```
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

```
#### 4. 创建测试程序`ProxyPattern`
```
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

```