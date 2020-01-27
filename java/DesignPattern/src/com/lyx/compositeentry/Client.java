package com.lyx.compositeentry;

public class Client {
    private CompositeEntity compositeEntity = new CompositeEntity();

    public void printData() {
        for (String s : compositeEntity.getData()) {
            System.out.println(s);
        }

    }

    public void setData(String data1, String data2) {
        compositeEntity.setData(data1, data2);
    }
}
