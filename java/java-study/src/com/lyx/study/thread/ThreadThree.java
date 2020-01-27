package com.lyx.thread;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class ThreadThree {
    public static void main(String args[]) throws Exception {
        ThreadC threadC = new ThreadC();
        FutureTask<String> stringFutureTask = new FutureTask<>(threadC);
        new Thread(stringFutureTask).start();
        System.out.println(stringFutureTask.get());
        System.out.println("this is main thread");

    }
}

class ThreadC implements Callable<String> {

    @Override
    public String call() throws Exception {
        Thread.sleep(1000);
        System.out.println("this is thread C");
        return "threadC";
    }
}
