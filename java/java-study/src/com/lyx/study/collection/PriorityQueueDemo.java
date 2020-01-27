package com.lyx.collection;

import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Random;

public class PriorityQueueDemo {
    public static void main(String[] args) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        Random random = new Random(47);
        for (int i = 0; i < 10; i++) {
            priorityQueue.offer(random.nextInt(i + 10));
        }
        QueueDemo.printQ(priorityQueue);
        List<Integer> ints = Arrays.asList(25, 22, 11, 22, 34, 623, 743, 223, 123, 1);
        priorityQueue = new PriorityQueue<>(ints);
        QueueDemo.printQ(priorityQueue);
        String fact = "FUCK YOU LAST YEAR";
        List<String >strings=Arrays.asList(fact.split(" "));
        PriorityQueue<String> stringPriorityQueue = new PriorityQueue<>(strings);
        QueueDemo.printQ(stringPriorityQueue);

    }


}
