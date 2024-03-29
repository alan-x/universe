package com.lyx.strategy;

public class Context {
    private Strategy strategy;

    public Context(Strategy strategy) {
        this.strategy = strategy;
    }

    public int excuteStrategy(int num1, int num2) {
        return this.strategy.doOperation(num1, num2);
    }
}
