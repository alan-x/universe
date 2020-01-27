package com.lyx.thread;

import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.RecursiveTask;

public class ForkJoinTaskDemo {
    public static void main(String[] args) {
        ForkJoinPool forkJoinPool = new ForkJoinPool();
        CountTask countTask = new CountTask(1, 4);
        ForkJoinTask<Integer> submit = forkJoinPool.submit(countTask);
        System.out.println(submit.join());
    }

    static class CountTask extends RecursiveTask<Integer> {
        private int splitSize = 2;
        private int begin;
        private int end;

        public CountTask(int begin, int end) {
            this.begin = begin;
            this.end = end;
        }

        @Override
        protected Integer compute() {
            int sum = 0;
            boolean canCompute = (end - begin) <= splitSize;
            if (canCompute) {
                for (int i = begin; i <= end; i++) {
                    sum = sum + i;
                }
            } else {
                int middle = (begin + end) / 2;
                CountTask first = new CountTask(begin, middle);
                CountTask second = new CountTask(middle + 1, end);
                first.fork();
                second.fork();
                sum = first.join() + second.join();
            }
            return sum;

        }
    }
}
