package com.lyx.server;

import com.lyx.server.config.Config;
import com.lyx.server.http.Http;
import com.lyx.server.http.HttpRequest;
import com.lyx.server.http.HttpResponse;

import java.net.*;
import java.io.*;

/**
 * 一个简单的Socket实现的HTTP响应服务器。<br>
 * 只用于熟悉HTTP协议的目的，可以看到浏览器发过来的数据格式。
 *
 * @author
 */
public class MyWebServer {
    public static void main(String[] args) {
        Socket socket = null;
        try {
            // 创建一个监听8000端口的服务器Socket
            ServerSocket s = new ServerSocket(Config.SOCKET_PORT, 3);
            while (true) {
                socket = s.accept();
                new MyWebServerThread(socket).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class MyWebServerThread extends Thread {
    private Socket socket;
    private InputStreamReader is;
    PrintStream out;
    BufferedReader br;
    String result = "";


    private HttpRequest httpRequest;
    private HttpResponse httpResponse;

    MyWebServerThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            is = new InputStreamReader(socket.getInputStream());
            out = new PrintStream(socket.getOutputStream());
            br = new BufferedReader(is);
            socket.setSoTimeout(50);
            try {
                do {
                    result += br.readLine();
                    result+="\n";
                } while (result != null);
            } catch (Exception e) {

            }
            System.out.println(result);
            this.httpRequest = new HttpRequest(result);
//
            this.httpResponse = new HttpResponse(httpRequest.http);
            out.println(httpResponse.toString());
            out.flush();
            out.close();
            is.close();
            // 关闭连接
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
