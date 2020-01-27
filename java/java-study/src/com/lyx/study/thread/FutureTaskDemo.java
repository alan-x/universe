package com.lyx.thread;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class FutureTaskDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        SonTask son1 = new SonTask("son1");
        FutureTask<String> stringFutureTask = new FutureTask<>(son1);
        new Thread(stringFutureTask).start();
        System.out.println(stringFutureTask.get());
        FutureTask<Integer> integerFutureTask = new FutureTask<>(new MyRun(), 22);
        new Thread(integerFutureTask).start();
        System.out.println(integerFutureTask.get());

    }

    static class SonTask implements Callable<String> {
        String name;

        public SonTask(String name) {
            this.name = name;
        }

        @Override
        public String call() throws Exception {
            Thread.sleep(1000);
            System.out.println(this.name + " completed");
            return "11";
        }
    }

    static class MyRun implements Runnable {

        @Override
        public void run() {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("thread 2 completed");
        }
    }
}
