package com.lyx.thread;

public class ThreadDaemon {
    public static void main(String[] args) {
        ThreadA a = new ThreadA();
        ThreadB b = new ThreadB();

        a.setDaemon(true);

        a.start();
        b.start();

        Thread mainThread = Thread.currentThread();
        System.out.println("thread a is daemon thread?" + a.isDaemon());
        System.out.println("thread b is daemon thread?" + b.isDaemon());
        System.out.println("thread main is daemon thread?" + mainThread.isDaemon());

    }

    static class ThreadA extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("b:" + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    static class ThreadB extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 5000; i++) {
                System.out.println("b:" + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

        }
    }

}

