package com.lyx.generics;

public class Holder3<T> {
    private static class AutoMobile {
    }

    private T a;

    public T getA() {
        return a;
    }

    public void setA(T a) {
        this.a = a;
    }

    public Holder3(T a) {
        this.a = a;
    }

    public static void main(String[] args) {
        Holder3<AutoMobile> autoMobileHolder3 = new Holder3<>(new AutoMobile());
        AutoMobile a = autoMobileHolder3.getA();
    }
}
