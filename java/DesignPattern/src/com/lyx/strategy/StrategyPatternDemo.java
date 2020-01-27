package com.lyx.strategy;

public class StrategyPatternDemo {
    public static void main(String[] args) {
        Context context = new Context(new OperationAdd());
        System.out.println(context.excuteStrategy(1, 2));
        context=new Context(new OperationSub());
        System.out.println(context.excuteStrategy(2, 1));
    }
}
