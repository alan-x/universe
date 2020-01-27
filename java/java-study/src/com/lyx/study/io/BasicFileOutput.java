package com.lyx.io;

import java.io.*;

public class BasicFileOutput {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(
                new StringReader(
                        BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/BufferInputFile.java")
                )
        );
        PrintWriter printWriter = new PrintWriter(
                new BufferedWriter(
                        new FileWriter("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
                )
        );
        int line = 1;
        String s;
        while ((s = bufferedReader.readLine()) != null) {
            System.out.println(line++ + ":" + s);
        }
        printWriter.close();
        System.out.println(BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt"));
    }
}
