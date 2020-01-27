package com.lyx.socket;


import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketAddress;
import java.util.Arrays;

public class SocketServerDemo {


    private static final int SOCKET_PORT = 8888;
    private static final int BUFF_SIZE = 2;

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(SOCKET_PORT);
        Socket socket = serverSocket.accept();
        InputStream inputStream = socket.getInputStream();
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        String info = "";
        while ((info = bufferedReader.readLine()) != null) {
            System.out.println("我是服务器，客户端说：" + info);
        }
        socket.shutdownInput();
        OutputStream outputStream = socket.getOutputStream();
        PrintWriter printWriter = new PrintWriter(outputStream);
        printWriter.write("fuck");
        printWriter.flush();

        printWriter.close();
        outputStream.close();
        bufferedReader.close();
        inputStreamReader.close();
        inputStream.close();
    }
}
