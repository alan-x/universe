package com.lyx.enums;

import java.lang.reflect.Type;
import java.util.Set;
import java.util.TreeSet;

enum Explore {HERE, THERE}

public class Reflection {
    public static Set<String> analyze(Class<?> enumClass) {
        System.out.println("Analyze " + enumClass);
        System.out.println("interface");
        for (Type type : enumClass.getGenericInterfaces()) {
            System.out.println(type);
        }
        System.out.println(enumClass.getSuperclass());
        System.out.println("method");
        Set<String> methods = new TreeSet<String>();

        for (String method : methods) {
            System.out.println(method);
        }
        return methods;
    }

    public static void main(String[] args) {
        Set<String> exploreMethod = analyze(Explore.class);
        Set<String> enumMethod = analyze(Enum.class);
        System.out.println(exploreMethod.containsAll(enumMethod));
        System.out.println(exploreMethod.removeAll(enumMethod));
        System.out.println(exploreMethod);

    }
}
