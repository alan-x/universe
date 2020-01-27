package com.lyx.socket.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UdpServer {
    private static final int SERVER_PORT = 8888;
    private static final int MAX_SIZE = 255;

    public static void main(String[] args) throws IOException {
        DatagramSocket datagramSocket = new DatagramSocket(SERVER_PORT);
        DatagramPacket datagramPacket = new DatagramPacket(new byte[MAX_SIZE], MAX_SIZE);
        while (true){
            datagramSocket.receive(datagramPacket);
            datagramPacket.setData("fuck you ".getBytes());
            System.out.println(datagramPacket.getAddress() + ":" + datagramPacket.getPort());
            datagramPacket.setLength(8);
            datagramSocket.send(datagramPacket);
        }

    }
}
