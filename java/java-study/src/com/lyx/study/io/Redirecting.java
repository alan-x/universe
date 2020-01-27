package com.lyx.io;

import java.io.*;

public class Redirecting {
    public static void main(String[] args) throws IOException {
        PrintStream out = System.out;
        BufferedInputStream bufferedInputStream = new BufferedInputStream(
                new FileInputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/src/com/lyx/io/Redirecting.java")
        );

        PrintStream printStream = new PrintStream(
                new BufferedOutputStream(
                        new FileOutputStream("/MY_PROJECT/PROJECT_OWN/Java/socket/reource/fuck.txt")
                )
        );
        System.setIn(bufferedInputStream);
        System.setOut(out);
        System.setErr(printStream);

        BufferedReader bufferedReader = new BufferedReader(
                new InputStreamReader(System.in)
        );
        String  s;
        while ((s=bufferedReader.readLine())!=null){
            System.out.println(s);
        }
        out.close();
        System.setOut(out);
    }

}
