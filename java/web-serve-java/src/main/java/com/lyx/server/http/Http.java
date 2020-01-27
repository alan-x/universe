package com.lyx.server.http;

import com.lyx.server.config.Config;

import javax.swing.plaf.PanelUI;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by FollowWinter on 02/12/2016.
 */
public class Http {
    // 响应码
    public static final String CODE_SUCCESS = "200";
    public static final String SUMMARY_SUCCESS = "SUCCESS";
    public static final String CODE_NOT_FOUND = "404";
    public static final String SUMMARY_NOT_FOUND = "NOT FOUND";


    // http版本
    public static final String HTTP_VERSION_1 = "HTTP/1.1";


    // 请求资源文件结尾
    public static final String CONTENT_TYPE_HTML = "text/html";
    public static final String CONTENT_TYPE_CSS = "text/css";
    public static final String CONTENT_TYPE_JS = "text/js";

    // 资源文件后缀
    public static final String RESOURCE_TYPE_HTML = ".html";
    public static final String RESOURCE_TYPE_CSS = ".css";
    public static final String RESOURCE_TYPE_JS = ".js";

    // 请求方式
    public static final String METHOD_GET = "GET";
    public static final String METHOD_POST = "POST";

    // http header
    private String method = METHOD_GET;
    private String resource = Config.DEFAULT_FILE;
    private Map<String, String> post = new HashMap<String, String>();
    private String version = HTTP_VERSION_1;
    private String code = CODE_SUCCESS;
    private String responseSummary = SUMMARY_SUCCESS;
    private String body = "";
    private String contentType = CONTENT_TYPE_HTML;


    /**
     * 方法简介 : Http的构造函数
     * 接受参数 : @param requestContent 请求正文
     * 返回参数 : 无
     * 方法流程 : - 根据请求首行,初始化一些参数
     *              1. 初始化`method`
     *              2. 初始化`resource`
     *              3. 初始化`version`
     *           - 根据`resource`初始化`content-type`
     */
    public Http(String requestContent) {
        String[] re = requestContent.split("\n");
        for (int i = 0; i < re.length; i++) {
            if (i == 0) {
                String[] firstLine = re[0].split(" ");
                this.setMethod(firstLine[0]);
                this.setResource(firstLine[1].equals("/") ? Config.DEFAULT_FILE : firstLine[1]);
                contentTypeInit();
                this.setVersion(firstLine[2]);
            }
        }
    }

    /**
     * 方法简介 : 初始化content-type
     * 接受参数 : 无
     * 返回参数 : 无
     * 方法流程 : - 根据请求的资源判断应当返回什么content-type
     *              1. 如果请求的资源是`.css`结尾,那就是`text/css`
     *              2. 如果请求的资源是`.js`结尾,那就是`text/js`
     *              3. 如果请求的资源是`.html`结尾,那就是`text/html`
     */
    private void contentTypeInit() {
        if (this.getResource().contains(RESOURCE_TYPE_HTML)) {
            this.contentType = CONTENT_TYPE_HTML;
        } else if (this.getResource().contains(RESOURCE_TYPE_CSS)) {
            this.contentType = CONTENT_TYPE_CSS;
        } else if (this.getResource().contains(RESOURCE_TYPE_JS)) {
            this.contentType = CONTENT_TYPE_JS;
        }
    }


    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }

    public Map<String, String> getPost() {
        return post;
    }

    public void setPost(Map<String, String> post) {
        this.post = post;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getResponseSummary() {
        return responseSummary;
    }

    public void setResponseSummary(String responseSummary) {
        this.responseSummary = responseSummary;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }
}
