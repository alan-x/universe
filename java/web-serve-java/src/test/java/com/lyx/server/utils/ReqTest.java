package com.lyx.server.utils;

import org.junit.Before;
import org.junit.Test;

/**
 * Created by FollowWinter on 05/12/2016.
 */
public class ReqTest {
    public String content = "GET / HTTP/1.1\n" +
            "Host: localhost:8000\n" +
            "Connection: keep-alive\n" +
            "Cache-Control: max-age=0\n" +
            "Upgrade-Insecure-Requests: 1\n" +
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36\n" +
            "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\n" +
            "Accept-Encoding: gzip, deflate, sdch, br\n" +
            "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4\n" +
            "Cookie: _csrf=ef975726863a1d5bf21c03d976932726cf0e10f5e3536ae375bf0ff0f9f7b4d8a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22zWOgBmQASWeLg5UK00GF_Ac10t8U0cwH%22%3B%7D; PHPSESSID=ff492cd4d19dbe95facf2d4b8fd606fa; pgv_pvi=7655816192; pgv_si=s4286001152; _ga=GA1.1.1259327258.1479669472; Idea-fcdf7c3=51995374-dea1-47a2-974a-2ea2d563f570\n";


    @Test
    public void testFind() {
        for (String i :
                Reg.find(content, "GET")) {
            System.out.println(i);
        }
    }

    @Test
    public void testFindVersion() {
        for (String i :
                Reg.find(content, "\\bHTTP\\b/\\d.\\d")) {
            System.out.println(i);
        }
    }

    @Test
    public void testFindResource() {
        for (String i :
                Reg.find(content, "$/s")) {
            System.out.println(i);
        }
    }

}
