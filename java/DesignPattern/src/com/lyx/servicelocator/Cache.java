package com.lyx.servicelocator;

import java.util.ArrayList;
import java.util.List;

public class Cache {
    private List<Service>serviceList;

    public Cache( ){
        this.serviceList = new ArrayList<>();
    }

    public Service getService(String serviceName){
        for (Service service : serviceList) {
            if (service.getName().equals(serviceName))return  service;
        }
        return null;
    }
    public void addService(Service service){
        for (Service s : serviceList) {
            if (s.getName().equals(service.getName()))return ;
        }
        serviceList.add(service);
    }

}
