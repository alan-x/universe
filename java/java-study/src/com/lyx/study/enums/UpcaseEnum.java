package com.lyx.enums;

enum Search {HITHER, YON}

public class UpcaseEnum {
    public static void main(String[] args) {
        Search[] values = Search.values();
        Enum e = Search.HITHER;
        for (Enum anEnum : e.getClass().getEnumConstants()) {
            System.out.println(anEnum);
        }
    }
}
