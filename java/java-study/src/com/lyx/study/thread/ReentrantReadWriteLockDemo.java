package com.lyx.thread;

import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReentrantReadWriteLockDemo {
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
        private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

        public void get() {
            lock.readLock().lock();
            try {
                System.out.println(Thread.currentThread().getName() + ":read start");
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + ":read end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                lock.readLock().unlock();
            }
        }

        public void put() {
            lock.writeLock().lock();
            try {
                System.out.println(Thread.currentThread().getName() + ": write start");
                Thread.sleep(1000);
                System.out.println(Thread.currentThread().getName() + ": write end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                lock.writeLock().unlock();
            }
        }

    }
}
