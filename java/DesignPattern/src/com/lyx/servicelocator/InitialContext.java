package com.lyx.servicelocator;

public class InitialContext {
    public Object lookup(String jndiName) {
        if (jndiName.equals("service1")) {
            System.out.println("lookup and create new Service1");
            return new Service1();
        } else if (jndiName.equals("service2")) {
            System.out.println("lookup and create new Service2");
            return new Service2();
        }
        return null;

    }
}
