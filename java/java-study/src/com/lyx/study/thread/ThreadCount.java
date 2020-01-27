package com.lyx.thread;

public class ThreadCount {
    public static void main(String args[]) {
        Count count = new Count();
        for (int i = 0; i < 5; i++) {
            ThreadA threadA = new ThreadA(count);
            threadA.start();
        }
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(count.num);
    }

    private static class Count {
        public int num = 0;

        private synchronized void add() throws InterruptedException {
            Thread.sleep(100);
            num += 1;
            System.out.println(Thread.currentThread().getName() + ":" + num);
        }
    }

    private static class ThreadA extends Thread {
        private Count count;

        public ThreadA(Count count) {
            this.count = count;
        }

        @Override
        public void run() {
            try {
                count.add();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
