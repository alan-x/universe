package com.lyx.io;

import com.sun.deploy.nativesandbox.NativeSandboxBroker;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class UsingRandomAccessFile {
    public static void display() throws IOException {
        RandomAccessFile rw = new RandomAccessFile("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt", "r");
        for (int i = 0; i < 7; i++) {
            System.out.println(i + ":" + rw.readDouble());
        }
        System.out.println(rw.readUTF());
        rw.close();
    }

    public static void main(String[] args) throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt", "rw");
        for (int i = 0; i < 7; i++) {
            randomAccessFile.writeDouble(i * 1.414);
        }
        randomAccessFile.writeUTF("end");
        randomAccessFile.close();
        display();

        randomAccessFile = new RandomAccessFile("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt", "rw");
        randomAccessFile.seek(5 * 8);
        randomAccessFile.writeDouble(47.00001);
        randomAccessFile.close();
        display();


    }
}
