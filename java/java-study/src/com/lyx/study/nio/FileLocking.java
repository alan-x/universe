package com.lyx.nio;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileLock;
import java.util.concurrent.TimeUnit;

public class FileLocking {
    public static void main(String[] args) throws IOException, InterruptedException {
        FileOutputStream fileOutputStream = new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt");
        FileLock fileLock = fileOutputStream.getChannel().tryLock();
        if (fileLock != null) {
            System.out.println("Lock File");
            TimeUnit.MILLISECONDS.sleep(100);
            fileLock.release();
            System.out.println("Realease Lock");
        }
        System.out.println(fileOutputStream);
    }
}
