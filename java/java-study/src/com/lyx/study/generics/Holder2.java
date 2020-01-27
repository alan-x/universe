package com.lyx.generics;


public class Holder2 {
    private static class AutoMobile {
    }

    private Object autoMobile;

    public Holder2(Object autoMobile) {
        this.autoMobile = autoMobile;
    }

    public Object getAutoMobile() {
        return autoMobile;
    }

    public void setAutoMobile(Object autoMobile) {
        this.autoMobile = autoMobile;
    }

    public static void main(String[] args) {
        Holder2 holder2=new Holder2(new AutoMobile());
        AutoMobile a= (AutoMobile) holder2.getAutoMobile();
        holder2.setAutoMobile("fuck");
        String fuck= (String) holder2.getAutoMobile();
        holder2.setAutoMobile(1);
        int one= (int) holder2.getAutoMobile();
    }
}
