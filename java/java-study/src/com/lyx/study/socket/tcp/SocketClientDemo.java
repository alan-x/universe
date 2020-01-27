package com.lyx.socket;

import java.io.*;
import java.net.Socket;
import java.util.Arrays;

public class SocketClientDemo {
    private static final int SERVER_PORT = 8888;
    private static String SERVER_ADDRESS = "127.0.0.1";

    public static void main(String[] args) throws IOException {
        Socket socket = new Socket(SERVER_ADDRESS, SERVER_PORT);
        OutputStream outputStream = socket.getOutputStream();
        PrintWriter printWriter = new PrintWriter(outputStream);
        printWriter.write("i want to fuck you");
        printWriter.flush();
        socket.shutdownOutput();

        InputStream inputStream = socket.getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String info="";
        while ((info=bufferedReader.readLine())!=null){
            System.out.println(info);
        }
        bufferedReader.close();
        inputStream.close();
        outputStream.close();

    }
}
