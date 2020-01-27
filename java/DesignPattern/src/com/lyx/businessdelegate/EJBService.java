package com.lyx.businessdelegate;

public class EJBService implements BusinessService {
    @Override
    public void doProcessing() {
        System.out.println("EJB");
    }
}
