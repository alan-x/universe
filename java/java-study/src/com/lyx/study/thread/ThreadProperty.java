package com.lyx.thread;

public class ThreadProperty {
    public static void main(String args[]) throws InterruptedException {
        MyThread myThread = new MyThread();
        for (int i = 0; i < 5; i++) {
            new Thread(myThread, String.valueOf(i)).start();
        }
        Thread thread = Thread.currentThread();
        System.out.println("this is main");
        System.out.println("main:Thread.activeCount: "+Thread.activeCount());
        System.out.println("main:thread.getName: "+thread.getName());
        System.out.println("main:thread.getId: "+thread.getId());
        System.out.println("main:thread.getPriority: "+thread.getPriority());
        System.out.println("main:thread.getState: "+thread.getState());
        System.out.println("main:thread.getThreadGroup: "+thread.getThreadGroup());
        System.out.println("main:thread.isAlive: "+thread.isAlive());
        System.out.println("main sleep");
        Thread.sleep(100000);
    }
}

class MyThread implements Runnable{

    @Override
    public void run() {
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread thread = Thread.currentThread();
        System.out.println(thread.getName()+":thread.getName: "+thread.getName());
        System.out.println(thread.getName()+":Thread.activeCount: "+Thread.activeCount());
        System.out.println(thread.getName()+":thread.getId: "+thread.getId());
        System.out.println(thread.getName()+":thread.getState: "+thread.getState());
        System.out.println(thread.getName()+":thread.getThreadGroup: "+thread.getThreadGroup());
        System.out.println(thread.getName()+":thread.isAlive: "+thread.isAlive());
        System.out.println(thread.getName()+":thread.isDaemon: "+thread.isDaemon());
    }
}
