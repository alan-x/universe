package com.lyx.server.utils;

import com.lyx.server.config.Config;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

/**
 * Created by FollowWinter on 02/12/2016.
 */
public class FileUtils {
    /**
     * 方法简介 : 从资源文件中读取资源
     * 接受参数 : @param fileName 文件名称
     * 返回参数 : @return 资源内容字符串
     * 方法流程 : - 找到文件
     * 1. 从资源文件夹下寻找文件并读取
     * - 读取文件
     * 2. 从资源文件读取文件
     * - 返回
     */
    public String readFileByLines(String fileName) throws Exception {
        File file = new File(System.getProperty("user.dir") + File.separator + Config.RESOURCE_DIR + fileName);
        BufferedReader reader = null;
        String tempString = null;
        String result = "";
        try {
            reader = new BufferedReader(new FileReader(file));
            int line = 1;
            while ((tempString = reader.readLine()) != null) {
                result += tempString;
            }
            reader.close();
            return result;
        } catch (Exception e) {
            throw e;
        }
    }
}
