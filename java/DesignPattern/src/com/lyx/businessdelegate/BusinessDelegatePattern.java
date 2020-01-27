package com.lyx.businessdelegate;

import com.lyx.compositeentry.Client;

public class BusinessDelegatePattern {
    public static void main(String[] args) {
        BusinessDelegate businessDelegate=new BusinessDelegate();
        businessDelegate.setServiceType("EJB");

        com.lyx.businessdelegate.Client client = new com.lyx.businessdelegate.Client(businessDelegate);
        client.doTast();
        businessDelegate.setServiceType("JMS");
        client.doTast();


    }
}
