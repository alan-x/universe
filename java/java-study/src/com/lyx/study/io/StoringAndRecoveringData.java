package com.lyx.io;

import java.io.*;

public class StoringAndRecoveringData {
    public static void main(String[] args) throws IOException {
        DataOutputStream dataOutputStream = new DataOutputStream(
                new BufferedOutputStream(
                        new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
                )
        );
        dataOutputStream.writeDouble(3.1415);
        dataOutputStream.writeUTF("PI");
        dataOutputStream.close();

        DataInputStream dataInputStream = new DataInputStream(
                new BufferedInputStream(
                        new FileInputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
                )
        );
        System.out.println(dataInputStream.readDouble());
        System.out.println(dataInputStream.readUTF());
    }
}
