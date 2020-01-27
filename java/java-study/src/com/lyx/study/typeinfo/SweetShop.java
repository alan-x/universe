package com.lyx.typeinfo;

class Candy{
    static {
        System.out.println("candy");
    }
}
class Gum{
    static {
        System.out.println("gum");
    }
}
class Cookie {
    static {
        System.out.println("Cookie");
    }
}
public class SweetShop {
    public static void main(String[] args) {
        System.out.println("inside main");
        new Candy();
        System.out.println("after create candy");
        try {
            Class.forName("Gum");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            System.out.println("could not find Gum");
        }
        System.out.println("after create gum");
        new Cookie();
        System.out.println("after create Cookie");
    }

}
