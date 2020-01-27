package com.lyx.io;

import java.io.*;

public class SerializableTest {
    public static void main(String[] args) throws IOException, ClassNotFoundException {

        Client client = new Client(1, "1");
        System.out.println(client);
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(
                new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
        );
        objectOutputStream.writeObject(client);

        ObjectInputStream objectInputStream = new ObjectInputStream(
                new FileInputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
        );
        Client client1 = (Client) objectInputStream.readObject();
        System.out.println(client1);
    }
}
