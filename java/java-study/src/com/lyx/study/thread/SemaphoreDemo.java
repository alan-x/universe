package com.lyx.thread;

import java.util.concurrent.Semaphore;

public class SemaphoreDemo {
    public static void main(String[] args) {
        Semaphore semaphore = new Semaphore(3);
        for (int i = 0; i < 10; i++) {
            int finalI = i;
            Runnable thread = () -> {
                System.out.println(finalI + " connect");
                try {
                    Thread.sleep(1000);
                    semaphore.acquire();
                    System.out.println(finalI + " back");
                    Thread.sleep(1000);
                    semaphore.release();
                    System.out.println(finalI + " end");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            };
            new Thread(thread).start();
        }
        System.out.println("main thread end");
    }
}
