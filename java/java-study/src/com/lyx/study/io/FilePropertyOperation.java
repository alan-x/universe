package com.lyx.io;

import java.io.File;

public class FilePropertyOperation {
    public static void main(String args[]) {
        File root = new File("/");

        System.out.println("root.canExecute: " + root.canExecute());
        System.out.println("root.toString: " + root.toString());
        System.out.println("root.getName: " + root.getName());
        System.out.println("root.isDirectory: " + root.isDirectory());
        System.out.println("root.canRead: " + root.canRead());
        System.out.println("root.canWrite: " + root.canWrite());
        System.out.println("root.canExecute: " + root.canExecute());
        System.out.println("root.exists: " + root.exists());
        System.out.println("root.getAbsolutePath: " + root.getAbsolutePath());
        System.out.println("root.getFreeSpace: " + root.getFreeSpace());
        System.out.println("root.getUsableSpace: " + root.getUsableSpace());
        System.out.println("root.getTotalSpace: " + root.getTotalSpace());
        System.out.println("root.exists: " + root.exists());
        System.out.println("root.isFile: " + root.isFile());
        System.out.println("root.isHidden: " + root.isHidden());
        System.out.println("root.lastModified: " + root.lastModified());

    }
}
