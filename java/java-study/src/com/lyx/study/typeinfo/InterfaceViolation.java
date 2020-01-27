package com.lyx.typeinfo;

interface A {
    void f();
}

class B implements A {

    @Override
    public void f() {

    }

    public void g() {
    }
}

public class InterfaceViolation {
    public static void main(String[] args) {
        A a = new B();
        a.f();
        System.out.println(a.getClass().getName());
        if (a instanceof B) {
            B b = (B) a;
            b.g();
        }
    }
}

class C implements A {

    @Override
    public void f() {
        System.out.println("c.f");
    }

    public void g() {
        System.out.println("c.f");
    }

    void u() {
        System.out.println("c.u");
    }

    public void w() {
        System.out.println("c.w");
    }

}

class HiddenC {
    public static A makeA() {
        return new C();
    }
}
