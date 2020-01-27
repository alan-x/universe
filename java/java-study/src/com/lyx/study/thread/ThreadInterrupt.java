package com.lyx.thread;

public class ThreadInterrupt implements Runnable {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(new ThreadInterrupt(), "ThreadInterrupt thread");
        System.out.println("Starting thread");
        thread.start();
        Thread.sleep(3000);
        System.out.println("Interrupting thread");
        thread.interrupt();
        System.out.println("is interrupted?" + thread.isInterrupted());
        Thread.sleep(3000);
        System.out.println("stopping application");
    }

    @Override
    public void run() {
        boolean stop = false;
        while (!stop) {
            System.out.println("the Thead is running ");
            long time = System.currentTimeMillis();
//            while (System.currentTimeMillis() - time < 1000) {
//
//            }
//            if (Thread.currentThread().isInterrupted()) {
//                break;
//            }

//             在线程可中断的时候调用 thread.interrupt() 方法后
//             该线程会立即唤醒
//            同时收到一个 InterruptedException
            try {
                Thread.sleep(100000);
            } catch (InterruptedException e) {
                break;
            }
        }
        System.out.println("My Thead exiting under request");

    }
}
