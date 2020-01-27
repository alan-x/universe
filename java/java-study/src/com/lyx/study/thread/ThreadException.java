package com.lyx.thread;

public class ThreadException {
    public static void main(String args[]) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                int ttt = Integer.parseInt("TTT");
            }
        });
        thread.setUncaughtExceptionHandler(new ThreadExceptionHandle());
        thread.start();
    }
}

class ThreadExceptionHandle implements Thread.UncaughtExceptionHandler {

    @Override
    public void uncaughtException(Thread t, Throwable e) {
        System.out.println(t.getId());
        System.out.println(e.getClass().getName());
        e.printStackTrace(System.out);
        System.out.println(t.getState());
    }
}
