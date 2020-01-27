package com.lyx.exception;

public class ExceptionSilence {
    public static void main(String[] args) {
        try {
            throw new RuntimeException();
        } catch (Exception e) {
            return;
        }
    }
}
