package com.lyx.interceptingfilter;

public class InterceptingFilterPattern {
    public static void main(String[] args) {
        FilterManager filterManager=new FilterManager(new Target());
        filterManager.setFilter(new AuthFilter());
        filterManager.setFilter(new DebugFilter());

        Client client=new Client();
        client.setFilterManager(filterManager);
        client.sendRequest("Home");
    }
}
