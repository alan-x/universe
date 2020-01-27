package com.lyx.server.http;

import org.junit.Test;

/**
 * Created by FollowWinter on 05/12/2016.
 */
public class HttpRequestTest {
    @Test
    public void testRequest() {
        HttpRequest httpRequest = new HttpRequest("POST /index.html HTTP/1.1\n" +
                "Host: localhost:8000\n" +
                "Connection: keep-alive\n" +
                "Content-Length: 400\n" +
                "Postman-Token: b080d1e1-c5fe-45f4-e0d8-72158c53ec76\n" +
                "Cache-Control: no-cache\n" +
                "Origin: chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop\n" +
                "sdfdsf: sdfsdf\n" +
                "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36\n" +
                "1: 1\n" +
                "Content-Type: multipart/form-data; boundary=----WebKitFormBoundarytTcW4l0QcHhHXaiB\n" +
                "Accept: */*\n" +
                "Accept-Encoding: gzip, deflate, br\n" +
                "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4\n" +
                "\n" +
                "------WebKitFormBoundarytTcW4l0QcHhHXaiB\n" +
                "Content-Disposition: form-data; name=\"1\"\n" +
                "\n" +
                "1\n" +
                "------WebKitFormBoundarytTcW4l0QcHhHXaiB\n" +
                "Content-Disposition: form-data; name=\"2\"\n" +
                "\n" +
                "2\n" +
                "------WebKitFormBoundarytTcW4l0QcHhHXaiB\n" +
                "Content-Disposition: form-data; name=\"3\"\n" +
                "\n" +
                "3\n" +
                "------WebKitFormBoundarytTcW4l0QcHhHXaiB\n" +
                "Content-Disposition: form-data; name=\"4\"\n" +
                "\n" +
                "4\n" +
                "------WebKitFormBoundarytTcW4l0QcHhHXaiB--\n");

    }
}
