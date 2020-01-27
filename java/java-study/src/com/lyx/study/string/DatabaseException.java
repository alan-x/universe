package com.lyx.string;

public class DatabaseException extends Exception {
    public DatabaseException(int transitionId, int queryId, String message) {
        super(String.format("(t%d,q%s) %s", transitionId, queryId, message));
    }

    public static void main(String[] args) {
        try {
            throw new DatabaseException(2,3,"writeError");
        } catch (DatabaseException e) {
            e.printStackTrace();
        }
    }
}
