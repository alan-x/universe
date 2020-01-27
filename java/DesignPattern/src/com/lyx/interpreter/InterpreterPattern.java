package com.lyx.interpreter;

public class InterpreterPattern {
    public static Expression getMaleExpression() {
        TerminalExpression robert = new TerminalExpression("Robert");
        TerminalExpression john = new TerminalExpression("John");
        return new OrExpression(robert, john);
    }

    public static Expression getMarriedWomanExpression() {
        TerminalExpression robert = new TerminalExpression("Julie");
        TerminalExpression john = new TerminalExpression("Married");
        return new AndExpression(robert, john);
    }

    public static void main(String[] args) {
        Expression maleExpression = getMaleExpression();
        Expression marriedWomanExpression = getMarriedWomanExpression();

        System.out.println(maleExpression.interpret("John"));
        System.out.println(marriedWomanExpression.interpret("Married Julie"));
    }
}
