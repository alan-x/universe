package com.lyx.thread;

import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;

public class CyclicBarrierDemo {
    public static void main(String[] args) {
        CyclicBarrier barrier = new CyclicBarrier(3, new TotalTask());
        BillTask billTask = new BillTask("111", barrier);
        BillTask billTask2 = new BillTask("222", barrier);
        BillTask billTask3 = new BillTask("333", barrier);
        billTask.start();
        billTask2.start();
        billTask3.start();
        System.out.println("main thread end");
    }

    static class TotalTask extends Thread {
        @Override
        public void run() {
            System.out.println("all task complete");
        }
    }

    static class BillTask extends Thread {
        private String billName;
        private CyclicBarrier barrier;

        public BillTask(String workerName, CyclicBarrier barrier) {
            this.billName = workerName;
            this.barrier = barrier;
        }

        @Override
        public void run() {
            try {
                System.out.println(billName + " begin");
                Thread.sleep(1000);
                System.out.println(billName + " complete");
                barrier.await();
                System.out.println(billName + " all complete");
            } catch (InterruptedException | BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
    }
}
