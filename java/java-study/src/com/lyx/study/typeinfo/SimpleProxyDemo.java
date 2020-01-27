package com.lyx.typeinfo;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

interface Interface {
    void doSomething();

    void somethingElse();
}

class RealObject implements Interface {

    @Override
    public void doSomething() {
        System.out.println("doSomething");
    }

    @Override
    public void somethingElse() {
        System.out.println("doSomethingElse");
    }
}

class SimpleProxy implements Interface {
    private Interface anInterface;

    public SimpleProxy(Interface anInterface) {
        this.anInterface = anInterface;
    }

    @Override
    public void doSomething() {
        System.out.println("Simple Proxy doSomething");
    }

    @Override
    public void somethingElse() {
        System.out.println("Simple Proxy somethingElse");
    }
}

public class SimpleProxyDemo {
    public static void consumer(Interface inter) {
        inter.doSomething();
        inter.somethingElse();
    }

    public static void main(String[] args) {
        consumer(new RealObject());
        consumer(new SimpleProxy(new RealObject()));
    }
}

class DynamicProxyHandler implements InvocationHandler {
    private Object proxied;

    public DynamicProxyHandler(Object proxied) {
        this.proxied = proxied;
    }


    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(proxy.getClass());
        System.out.println(method);
        System.out.println(args);
        return method.invoke(proxied, args);
    }
}

class SimpleDynamicProxy {
    public static void consumer(Interface inter) {
        inter.doSomething();
        inter.somethingElse();
    }

    public static void main(String[] args) {
        RealObject realObject = new RealObject();
        consumer(realObject);

        Interface proxy = (Interface) Proxy.newProxyInstance(
                Interface.class.getClassLoader(),
                new Class[]{Interface.class},
                new DynamicProxyHandler(realObject)
        );
        consumer(proxy);
    }
}