package com.lyx.io;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class BufferInputFile {
    public static String read(String fileName) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName));
        String s;
        StringBuilder stringBuilder = new StringBuilder();
        while ((s = bufferedReader.readLine()) != null) {
            stringBuilder.append(s + "\n");
        }
        bufferedReader.close();
        return stringBuilder.toString();
    }

    public static void main(String[] args) throws IOException {
        System.out.println(read("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/BufferInputFile.java"));
    }
}
