package com.lyx.enums;

public enum SpaceShip {
    A, B, C, D, E;

    @Override
    public String toString() {
        String name = name();
        String s = name.substring(1).toLowerCase();
        return name + s;
    }

    public static void main(String[] args) {
        for (SpaceShip spaceShip : values()) {
            System.out.println(spaceShip);
        }
    }
}
