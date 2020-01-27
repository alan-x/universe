package com.lyx.thread;

public class ThreadTwo {
    public static void main(String args[]){
        new ThreadB().run();
        System.out.println("this is main thread");
    }
}
class ThreadB implements Runnable{

    @Override
    public void run() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("这是线程B");
    }
}
