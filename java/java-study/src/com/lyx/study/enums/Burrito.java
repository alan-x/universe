package com.lyx.enums;

enum Spiciness {
    NOT, MILD, MEDIUM, HOT, FLAMING
}

public class Burrito {
    Spiciness degree;

    public Burrito(Spiciness degree) {
        this.degree = degree;
    }

    public static void main(String[] args) {
        System.out.println(new Burrito(Spiciness.NOT));
        System.out.println(new Burrito(Spiciness.MILD));
        System.out.println(new Burrito(Spiciness.MEDIUM));
        System.out.println(new Burrito(Spiciness.HOT));
        System.out.println(new Burrito(Spiciness.FLAMING));
    }

    @Override
    public String toString() {
        return "Burrito{" +
                "degree=" + degree +
                '}';
    }
}
