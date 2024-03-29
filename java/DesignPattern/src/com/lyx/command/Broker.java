package com.lyx.command;

import com.sun.tools.corba.se.idl.constExpr.Or;

import java.util.ArrayList;
import java.util.List;

public class Broker {
    private List<Order>orderList=new ArrayList<>();
    public void takeOrder(Order order){
        orderList.add(order);
    }
    public void  placeOrder(){
        for (Order order : orderList) {
            order.execute();
        }
        orderList.clear();
    }
}
