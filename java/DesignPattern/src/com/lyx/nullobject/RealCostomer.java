package com.lyx.nullobject;

public class RealCostomer extends AbstractCustomer {
    public RealCostomer(String name) {
        this.name = name;
    }

    @Override
    public boolean isNull() {
        return false;
    }

    @Override
    public String getName() {
        return name;
    }
}
