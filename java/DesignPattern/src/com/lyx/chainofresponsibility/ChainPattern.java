package com.lyx.chainofresponsibility;

public class ChainPattern {
    public static void main(String[] args) {
        ErrorLogger errorLogger = new ErrorLogger(AbstractLogger.INFO);
        ConsoleLog consoleLog = new ConsoleLog(AbstractLogger.DEBUG);
        FileLogger fileLogger = new FileLogger(AbstractLogger.ERROR);

        errorLogger.setNextLogger(consoleLog);
        consoleLog.setNextLogger(fileLogger);

        errorLogger.logMessage(AbstractLogger.INFO, "INFO");
        System.out.println();
        errorLogger.logMessage(AbstractLogger.DEBUG, "DEBUG");
        System.out.println();
        errorLogger.logMessage(AbstractLogger.ERROR, "ERROR");

    }
}
