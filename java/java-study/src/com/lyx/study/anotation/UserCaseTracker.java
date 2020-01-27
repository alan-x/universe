package com.lyx.anotation;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

public class UserCaseTracker {
    public static void main(String[] args) {
        for (Method method : PasswordUtils.class.getDeclaredMethods()) {
            System.out.println(method);
            for (Annotation annotation : method.getAnnotations()) {
                System.out.println(annotation);

                UserCase annotation1 = method.getAnnotation(UserCase.class);
                System.out.println(annotation1.id());
                System.out.println(annotation1.description());
            }

        }
    }
}
