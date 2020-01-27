package com.lyx.nio;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

public class GetChannel {
    public static void main(String[] args) throws IOException {
        String file = "/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt";
        FileChannel fc = new FileOutputStream(file).getChannel();
        fc.write(ByteBuffer.wrap("Some text".getBytes()));
        fc.close();

        fc = new RandomAccessFile(file, "rw").getChannel();
        fc.position(fc.size());
        fc.write(ByteBuffer.wrap("Some more".getBytes()));
        fc.close();

        fc = new FileInputStream(file).getChannel();
        ByteBuffer buff = ByteBuffer.allocate(1024);
        fc.read(buff);
        buff.flip();
        while (buff.hasRemaining()) {
            System.out.print((char) buff.get());
        }


    }
}
