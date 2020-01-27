package com.lyx.io;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.IOException;

public class FormatterMemoryInput {
    public static void main(String[] args) throws IOException {
        DataInputStream dataInputStream = new DataInputStream(
                new ByteArrayInputStream(
                        BufferInputFile.read("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/BufferInputFile.java").getBytes()

                )
        );
        while (dataInputStream.available() != 0) {
            System.out.print((char) dataInputStream.readByte());
        }
    }
}
