package com.lyx.socket;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Enumeration;

public class InetAddressDemo {

    public static void main(String[] args) throws SocketException, UnknownHostException {
        Enumeration<NetworkInterface> networkInterfaceEnumeration = NetworkInterface.getNetworkInterfaces();
        while (networkInterfaceEnumeration.hasMoreElements()){
            NetworkInterface networkInterface = networkInterfaceEnumeration.nextElement();
            System.out.println("neme:"+networkInterface.getName());
            System.out.println("name:"+networkInterface.getDisplayName());
            System.out.println("name:"+networkInterface.getDisplayName());
            Enumeration<InetAddress> inetAddressEnumeration = networkInterface.getInetAddresses();
            while (inetAddressEnumeration.hasMoreElements()){
                InetAddress inetAddress = inetAddressEnumeration.nextElement();
                System.out.println(inetAddress.getHostAddress());
            }
        }
        InetAddress[] inetAddresses = InetAddress.getAllByName("www.baidu.com");
        System.out.println("www.baidu.com");
        for (InetAddress inetAddress : inetAddresses) {
            System.out.println(inetAddress.getHostAddress());
        }
    }
}
