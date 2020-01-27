package com.lyx.socket;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class WebServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8081);
        Socket socket = serverSocket.accept();
        InputStream is = socket.getInputStream();
        InputStreamReader reader = new InputStreamReader(is);
        while (true) {
            System.out.print((char)reader.read());
        }
    }
}
