package com.lyx.nio;

import java.nio.ByteBuffer;

public class GetData {
    public static void main(String[] args) {
        ByteBuffer buffer = ByteBuffer.allocate(1024);
        int i = 0;
        while (i++ < buffer.limit()) {
            if (buffer.get() != 0) {
                System.out.println("nonzero");
            }
        }
        System.out.println("i=" + i);
        buffer.rewind();


        buffer.asCharBuffer().put("hello");
        char c;
        while ((c = buffer.getChar()) != 0) {
            System.out.print(c);
        }
        buffer.rewind();

        buffer.asShortBuffer().put((short) 123456);
        System.out.println(buffer.getShort());
        buffer.rewind();

        buffer.asIntBuffer().put(23424);
        System.out.println(buffer.getInt());
        buffer.rewind();

        buffer.asLongBuffer().put(3423423234l);
        System.out.println(buffer.getLong());
        buffer.rewind();


        buffer.asFloatBuffer().put(23423.1f);
        System.out.println(buffer.getFloat());
        buffer.rewind();


        buffer.asDoubleBuffer().put(324234d);
        System.out.println(buffer.getDouble());
        buffer.rewind();

    }
}
