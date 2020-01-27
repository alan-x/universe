package com.lyx.thread;

public class ThreadLocalDemo {

    private static ThreadLocal<Integer> seqNum = new ThreadLocal<Integer>() {
        @Override
        protected Integer initialValue() {
            return 0;
        }
    };

    public ThreadLocal<Integer> getThreadLocal() {
        return seqNum;
    }

    public int getNextNum() {
        seqNum.set(seqNum.get() + 1);
        return seqNum.get();
    }


    public static void main(String[] args) {
        ThreadLocalDemo threadLocalDemo = new ThreadLocalDemo();
        TestClient t1=new TestClient(threadLocalDemo);
        TestClient t2=new TestClient(threadLocalDemo);
        TestClient t3=new TestClient(threadLocalDemo);
        t1.start();
        t2.start();
        t3.start();
    }

    private static class TestClient extends Thread {
        private ThreadLocalDemo threadLocalDemo;

        public TestClient(ThreadLocalDemo threadLocalDemo) {
            this.threadLocalDemo = threadLocalDemo;
        }

        @Override
        public void run() {
            for (int i = 0; i < 3; i++) {
                System.out.println(Thread.currentThread().getName() + ":" + threadLocalDemo.getNextNum());
            }
            threadLocalDemo.getThreadLocal().remove();
        }
    }
}
