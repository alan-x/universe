package com.lyx.nio;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

public class ChannelCopy {
    public static void main(String[] args) throws IOException {
        FileChannel in = new FileInputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/nio/ChannelCopy.java").getChannel();
        FileChannel out = new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt").getChannel();
        ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
        while (in.read(byteBuffer) != -1) {
            byteBuffer.flip();
            out.write(byteBuffer);
            byteBuffer.clear();
        }

    }
}
