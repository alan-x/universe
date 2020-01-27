package com.lyx.server.config;

import java.io.File;

/**
 * Created by FollowWinter on 02/12/2016.
 */
public class Config {
    // 资源文件 也就是项目运行目录
    public static final String RESOURCE_DIR = "resources" + File.separator;
    // 监听端口
    public static final int SOCKET_PORT = 8000;
    // 默认资源首页
    public static final String DEFAULT_FILE = "index.html";
}
