package com.lyx.server.http;

import com.lyx.server.utils.FileUtils;

/**
 * Created by FollowWinter on 05/12/2016.
 */
public class HttpResponse {
    private Http http;
    private FileUtils fileUtils;

    /**
     * 方法简介 : HttpResponse的构造函数
     * 接受参数 : @param http对象
     * 返回参数 : 无
     * 方法流程 : - 初始化http
     * - 初始化其他
     */
    public HttpResponse(Http http) {
        this.http = http;
        this.fileUtils = new FileUtils();
        init();
    }

    /**
     * 方法简介 : 初始化返回的`http header`
     * 接受参数 : 无
     * 返回参数 : 无
     * 方法流程 : - 初始化`body`,从文件中将要请求的资源取出来,放到`http`对象中
     * - 初始化其他
     */
    private void init() {
        String body = null;
        try {
            body = fileUtils.readFileByLines(this.http.getResource());
            this.http.setBody(body);

        } catch (Exception e) {
//            e.printStackTrace();
            this.http.setBody("404 not found");
            this.http.setCode(Http.CODE_NOT_FOUND);
            this.http.setResponseSummary(Http.SUMMARY_NOT_FOUND);
        }

    }

    /**
     * 方法简介 : 构造返回的`http`报文
     * 接受参数 : 无
     * 返回参数 : `http`报文
     * 方法流程 : - 拼接必须的报文字段
     * 1. version
     * 2. code
     * 3. response-summary
     * 4. body
     */
    @Override
    public String toString() {
        return this.http.getVersion() + " " + this.http.getCode() + " " + this.http.getResponseSummary() + "\n" + "Content-Type:" + this.http.getContentType() + "\n" + "\n" + this.http.getBody() + "\n";
    }

}
