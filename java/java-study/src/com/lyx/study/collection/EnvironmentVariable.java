package com.lyx.collection;

import java.util.Map;

public class EnvironmentVariable {
    public static void main(String[] args) {
        for (Map.Entry<String, String> stringStringEntry : System.getenv().entrySet()) {
            System.out.println(stringStringEntry.getKey() + ":" + stringStringEntry.getValue());
        }
    }
}
