package com.lyx.socket.udp;


import java.io.IOException;
import java.net.*;

public class UdpClient {
    private static final int TIMEOUT = 3000;
    private static final int SERVER_PORT = 8888;
    private static final String SERVER_HOST = "127.0.0.1";
    private static final int MAX_TRIES = 10;

    public static void main(String[] arts) throws IOException {
        InetAddress inetAddress = InetAddress.getByName(SERVER_HOST);
        byte[] data = "fuck".getBytes();
        DatagramSocket datagramSocket = new DatagramSocket();
        datagramSocket.setSoTimeout(TIMEOUT);
        DatagramPacket datagramPacket = new DatagramPacket(data, data.length, inetAddress, SERVER_PORT);
        DatagramPacket receivePacket = new DatagramPacket(new byte[8], 8);
        int tries = 0;
        boolean receiveResponse = false;
        do {
            datagramSocket.send(datagramPacket);
            try {
                datagramSocket.receive(receivePacket);
                receiveResponse = true;
            } catch (IOException e) {
                tries++;
                e.printStackTrace();
            }
        } while ((!receiveResponse) && (tries < MAX_TRIES));
        if (receiveResponse){
            System.out.println(new String(receivePacket.getData(),"UTF-8"));
        }
    }
}
