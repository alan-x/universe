package com.lyx.thread;

import java.sql.Time;
import java.util.concurrent.DelayQueue;
import java.util.concurrent.Delayed;
import java.util.concurrent.TimeUnit;

public class DelayQueueDemo {
    public static void main(String[] args) {
        final DelayQueue<Student>delayQueue=new DelayQueue<>();
        for (int i = 0; i < 5; i++) {
            Student student=new Student(i+"",Math.round(Math.random()*10+i));
            delayQueue.put(student);
        }
        System.out.println(delayQueue.peek().getName());
    }

    private static class Student implements Delayed {
        private String name;
        private long workTime;
        private long submitTime;

        public String getName() {
            return name + ":" + workTime;
        }

        public Student(String name, long submitTime) {
            this.name = name;
            this.workTime = submitTime;
            this.submitTime = TimeUnit.NANOSECONDS.convert(submitTime, TimeUnit.MILLISECONDS) + System.nanoTime();
            System.out.println(this.name + ":" + workTime);
        }

        @Override
        public long getDelay(TimeUnit unit) {
            return unit.convert(submitTime - System.nanoTime(), TimeUnit.NANOSECONDS);
        }

        @Override
        public int compareTo(Delayed o) {
            Student that = (Student) o;
            return Long.compare(submitTime, that.submitTime);
        }

    }
}
