package com.lyx.server.http;

import java.util.Map;

/**
 * 用来解析收到的http报文 好复杂啊
 * Created by FollowWinter on 02/12/2016.
 */
public class HttpRequest {
    public Http http;
    public HttpRequest(String requestContent) {
        http = new Http(requestContent);
    }


}
