package com.lyx.nio;

import java.nio.ByteBuffer;

public class BufferDemo {
    public static void main(String[] args) {
        ByteBuffer byteBuffer = ByteBuffer.allocate(10);
        byteBuffer.put((byte) 'H')
                .put((byte) 'E')
                .put((byte) 'l')
                .put((byte) 'l')
                .put((byte) 'o');
        System.out.println(byteBuffer.position());
        System.out.println(byteBuffer.limit());
        byteBuffer.put(0, (byte) 'M');
        byteBuffer.put((byte) 'w');
        System.out.println(byteBuffer.position());
        System.out.println(byteBuffer.limit());
        byteBuffer.flip();
        for (int i = 0; i < byteBuffer.limit(); i++) {
            System.out.println((char) byteBuffer.get(i));
        }
        for (int i = 0; i < byteBuffer.remaining(); i++) {
            System.out.println((char) byteBuffer.get(i));
        }
    }
}
