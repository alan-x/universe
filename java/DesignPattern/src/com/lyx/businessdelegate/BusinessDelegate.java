package com.lyx.businessdelegate;

public class BusinessDelegate {
    BusinessLookup businessLookup = new BusinessLookup();
    BusinessService businessService;
    String serviceType;

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void doTask() {
        businessService=businessLookup.getBusinessService(serviceType);
        businessService.doProcessing();
    }
}
