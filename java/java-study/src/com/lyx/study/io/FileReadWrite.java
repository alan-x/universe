package com.lyx.io;

import java.io.*;

public class FileReadWrite {

    public static void main(String args[]) throws IOException {
        File root = new File("./reource");
        if (!root.exists()) {
            root.mkdir();
        }
        File newFile = new File(root.getAbsolutePath() + File.separator + "newFile");
        if (!newFile.exists()) {
            newFile.createNewFile();
        }
        FileWriter fileWriter = new FileWriter(newFile);
        fileWriter.write("hello file");
        fileWriter.append("\nappend:hello file");
        fileWriter.flush();

        FileReader fileReader = new FileReader(newFile);
        int ch;
        while ((ch = fileReader.read()) != -1) {
            System.out.print((char) ch);
        }
    }
}
