package com.lyx.io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;

public class FileOutputShortcut {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(
                new StringReader(
                        BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/BasicFileOutput.java")
                )
        );
        PrintWriter printWriter = new PrintWriter("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt");
        int line = 1;
        String s;
        while ((s = bufferedReader.readLine()) != null) {
            System.out.println(line + ":" + s);
        }
        System.out.println(printWriter);
        System.out.println(BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt"));
    }
}
