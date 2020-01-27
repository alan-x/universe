package com.lyx.thread;

import java.util.concurrent.CountDownLatch;

public class CountDownLatchDemo {
    public static void main(String[] args) throws InterruptedException {
        CountDownLatch countDownLatch = new CountDownLatch(3);
        new Worker("A",countDownLatch).start();
        new Worker("B",countDownLatch).start();
        new Worker("C",countDownLatch).start();
        countDownLatch.await();
        System.out.println("main thread end");
    }

    private static class Worker extends Thread {
        private String workerName;
        private CountDownLatch latch;

        public Worker(String workerName, CountDownLatch latch) {
            this.workerName = workerName;
            this.latch = latch;
        }

        @Override
        public void run() {
            try {
                System.out.println(workerName + " begin");
                Thread.sleep(1000);
                System.out.println(workerName + " end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            latch.countDown();
        }

    }

}
