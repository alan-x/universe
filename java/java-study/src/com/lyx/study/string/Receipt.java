package com.lyx.string;

import java.util.Formatter;

public class Receipt {
    private double total = 0;
    private Formatter formatter = new Formatter(System.out);

    public void printTitle() {
        formatter.format("%-15s %5s %10s\n", "Item", "Qty", "Price");
        formatter.format("%-15s %5s %10s\n", "---", "---", "---");

    }

    public void print(String name, int qty, double price) {
        formatter.format("%-15s %5s %10.2f\n", name, qty, price);
        total += price;
    }

    public void printTotal() {
        formatter.format("%-15s %5s %10.2f\n", "Tax", "", total * 0.06);
        formatter.format("%-15s %5s %10s\n", "", "", "---");
        formatter.format("%-15s %5s %10.2f\n", "Total", "", total * 1.06);

    }

    public static void main(String[] args) {
        Receipt receipt = new Receipt();
        receipt.printTitle();
        receipt.print("JackMagicbean",4,25);
        receipt.print("Jack",4,25);
        receipt.printTotal();
    }
}
