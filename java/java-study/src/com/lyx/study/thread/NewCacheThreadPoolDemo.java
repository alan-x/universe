package com.lyx.thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class NewCacheThreadPoolDemo {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        for (int i = 0; i < 20; i++) {
            int finalI = i;
            Runnable runnable=new Runnable() {
                @Override
                public void run() {
                    try {
                        System.out.println(finalI + " begin");
                        Thread.sleep(1000);
                        System.out.println(finalI + " end");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            };
            executorService.execute(runnable);
        }
        executorService.shutdown();
        System.out.println("main thread completed");
    }
}
