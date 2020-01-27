package com.lyx.exception;

class VeryImportantException extends Exception {
    @Override
    public String toString() {
        return "a very important exception";
    }
}

class HoHumException extends Exception {
    @Override
    public String toString() {
        return "a trivival exception";
    }
}

public class LostMessage {
    void f() throws VeryImportantException {
        throw new VeryImportantException();
    }

    void dispose() throws HoHumException {
        throw new HoHumException();
    }

    public static void main(String[] args) {
        LostMessage lostMessage = new LostMessage();
        try {
            try {
                lostMessage.f();
            } finally {
                lostMessage.dispose();
            }
        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
