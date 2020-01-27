package com.lyx.io;

import java.io.IOException;
import java.io.StringReader;

public class MemoryInput {
    public static void main(String[] args) throws IOException {
        StringReader stringReader = new StringReader(BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/BufferInputFile.java"));
        int c;
        while ((c=stringReader.read())!=-1){
            System.out.print((char)c);
        }
    }
}
