package com.lyx.thread;

import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockDemo {
    public static void main(String args[]) {
        final Count count = new Count();
        for (int i = 0; i < 2; i++) {
            new Thread(count::get).start();
        }
        for (int i = 0; i < 2; i++) {
            new Thread(count::put).start();
        }

    }

    private static class Count {
        final ReentrantLock lock = new ReentrantLock();

        public void get() {
//            final ReentrantLock lock = new ReentrantLock();

            try {
                lock.lock();
                System.out.println(Thread.currentThread().getName() + ":begin");
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + ":end");
                lock.unlock();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }

        public void put() {
//            final ReentrantLock lock = new ReentrantLock();
            try {
                lock.lock();
                System.out.println(Thread.currentThread().getName() + ":begin");
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + ":end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
