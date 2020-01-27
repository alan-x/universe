package com.lyx.anotation;

public class Testable {
    public void execute() {
        System.out.println("execute");
    }

    @Test
    void testExecute() {
        execute();
    }
}
