package com.lyx.io;

import java.io.*;

public class FileManage {
    public static void main(String args[]) throws IOException, InterruptedException {
        File root = new File("." + File.separator + "resource");
        if (!root.exists()) {
            root.mkdir();
        }
        File newFile = new File(root.getAbsolutePath() + File.separator + "newFile");
        if (!newFile.exists()) {
            newFile.createNewFile();
        }

        InputStreamReader in = new InputStreamReader(System.in);
        BufferedReader bufferedReader = new BufferedReader(in);
        System.out.print("文件已经生成，请查看文件，输入任意字符删除文件");
        bufferedReader.readLine();


        if (root.list().length == 0) {
            root.delete();
        } else {
            File subFile;
            for (String s : root.list()) {
                subFile = new File(root.getAbsolutePath() + File.separator + s);
                subFile.delete();
            }
            root.delete();
        }

    }
}
