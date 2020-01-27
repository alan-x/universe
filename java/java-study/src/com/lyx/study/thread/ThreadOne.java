package com.lyx.thread;

public class ThreadOne {
    public static void main(String arg[]) {
        new ThreadA().start();
        System.out.println("这是主线程");
    }
    static class ThreadA extends Thread {
        @Override
        public void run() {
            super.run();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("这是线程A");
        }
    }
}

