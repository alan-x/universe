package com.lyx.io;

import java.io.*;
import java.util.Arrays;
import java.util.Random;


class Data implements Serializable {
    private int n;

    public Data(int n) {
        this.n = n;
    }

    @Override
    public String toString() {
        return Integer.toString(n);
    }
}

public class Worm implements Serializable {
    private static Random random = new Random(47);
    private Data[] d = {
            new Data(random.nextInt(10)),
            new Data(random.nextInt(10)),
            new Data(random.nextInt(10)),
    };
    private Worm next;
    private char c;

    public Worm(int i, char x) {
        System.out.println("construct:" + i);
        c = x;
        if (--i > 0) {
            next = new Worm(i, (char) (x + 1));
        }
    }

    public Worm() {
    }

    @Override
    public String toString() {
        return "Worm{" +
                "d=" + Arrays.toString(d) +
                ", next=" + next +
                ", c=" + c +
                '}';
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Worm w = new Worm(6, 'a');
        System.out.println("w=" + w);


        ObjectOutputStream objectOutputStream = new ObjectOutputStream(
                new FileOutputStream("worm.out")
        );
        objectOutputStream.writeObject("worm.out");
        objectOutputStream.writeObject(w);
        objectOutputStream.close();

        ObjectInputStream objectInputStream = new ObjectInputStream(
                new FileInputStream("worm.out")
        );
        String s = (String) objectInputStream.readObject();
        Worm w2 = (Worm) objectInputStream.readObject();
        System.out.println(s + "w2=" + w2);
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream1 = new ObjectOutputStream(byteArrayOutputStream);
        objectOutputStream1.writeObject("worm");
        objectOutputStream1.writeObject(w);
        objectOutputStream1.flush();

    }
}
