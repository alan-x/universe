package com.lyx.io;

import java.io.File;

public class FileList {
    public static void main(String args[]) {
        fileList("/MY_LIFE_FILE");
    }

    private static void fileList(String s) {
        File file = new File(s);
        if (file.exists()) {
            int num = file.toString().split(File.separator).length ;
            StringBuilder insetBlank = new StringBuilder();
            while (num-- != 0) {
                insetBlank.append("   |");
            }
            if (file.isDirectory()) {
                System.out.println(insetBlank+"+ "+ file.getName());
                for (String s1 : file.list()) {
                    fileList(file.toString() + File.separator + s1);
                }
            } else {
                System.out.println(insetBlank+"- " + file.getName());
            }
        }
    }
}
