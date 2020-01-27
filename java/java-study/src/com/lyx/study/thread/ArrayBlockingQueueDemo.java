package com.lyx.thread;


import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ArrayBlockingQueueDemo {
    public static void main(String args[]) throws InterruptedException {
        BlockingQueue<String> blockingQueue = new ArrayBlockingQueue<>(16);
        for (int i = 0; i < 4; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    while (true) {
                        try {
                            String log = blockingQueue.take();
                            parseLog(log);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }).start();
        }
        for (int i = 0; i < 16; i++) {
            String log = i + 1 + ">";
            blockingQueue.put(log);
        }
    }

    private static void parseLog(String log) {
        System.out.println(log + Thread.currentThread().getName());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
