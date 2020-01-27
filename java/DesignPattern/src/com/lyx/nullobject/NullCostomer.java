package com.lyx.nullobject;

public class NullCostomer extends AbstractCustomer {


    @Override
    public boolean isNull() {
        return true;
    }

    @Override
    public String getName() {
        return "No customer";
    }
}
