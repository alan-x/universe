package com.lyx.nullobject;

public class NullPattern {
    public static void main(String[] args) {
        AbstractCustomer customer = CustomerFactory.getCustomer("1");
        AbstractCustomer customer1 = CustomerFactory.getCustomer("2");
        AbstractCustomer customer2 = CustomerFactory.getCustomer("3");
        AbstractCustomer customer3 = CustomerFactory.getCustomer("4");
        System.out.println(customer.getName());
        System.out.println(customer1.getName());
        System.out.println(customer2.getName());
        System.out.println(customer2.getName());
        System.out.println(customer3.getName());
    }
}
