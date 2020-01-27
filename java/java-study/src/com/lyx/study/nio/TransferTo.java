package com.lyx.nio;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;

public class TransferTo {
    public static void main(String[] args) throws IOException {
        FileChannel in = new FileInputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/nio/TransferTo.java").getChannel();
        FileChannel out = new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt").getChannel();
        in.transferTo(0, in.size(), out);
    }
}
