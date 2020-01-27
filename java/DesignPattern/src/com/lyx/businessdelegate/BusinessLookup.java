package com.lyx.businessdelegate;

public class BusinessLookup {
    public BusinessService getBusinessService(String serviceType) {
        if (serviceType.equals("EJB")) {
            return new EJBService();
        } else {
            return new JMSService();
        }
    }
}
