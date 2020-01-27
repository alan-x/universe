package com.lyx.nullobject;

public class CustomerFactory {
    public static final String[] names = {"1", "2", "3"};

    public static AbstractCustomer getCustomer(String name) {
        for (String s : names) {
            if (s.equals(name)) {
                return new RealCostomer(name);
            }
        }
        return new NullCostomer();
    }
}
