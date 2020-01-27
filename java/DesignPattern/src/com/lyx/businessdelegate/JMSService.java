package com.lyx.businessdelegate;

public class JMSService implements BusinessService {
    @Override
    public void doProcessing() {
        System.out.println("JMS");
    }
}
