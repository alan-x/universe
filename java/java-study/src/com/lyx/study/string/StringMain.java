package com.lyx.study.string;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.Arrays;

public class StringMain {
    public static void main(String args[]) throws UnsupportedEncodingException {
        String s1 = "hello world";
        System.out.println(s1);
        String s2 = new String("hello world");
        System.out.println(s2);
        String s3 = new String(new char[]{'a', 'b', 'c'});
        System.out.println(s3);
        String s4 = new String(new char[]{'a', 'b', 'c'}, 1, 2);
        System.out.println(s4);

        System.out.println(s1.length());
        System.out.println(s1.isEmpty());
        System.out.println(s1.charAt(1));
        System.out.println(Arrays.toString(s1.getBytes(Charset.defaultCharset())));
        System.out.println(Arrays.toString(s1.getBytes("UTF-8")));
        System.out.println(Arrays.toString(s1.getBytes()));
        System.out.println(s1.equals("hello world"));
        System.out.println(s1.equalsIgnoreCase("HELLO WORLD"));
        System.out.println(s1.startsWith("h"));
        System.out.println(s1.startsWith("e",1));
        System.out.println(s1.endsWith("d"));
        System.out.println(s1.indexOf(101));
        System.out.println(s1.indexOf("d"));
        System.out.println(s1.lastIndexOf(108));
        System.out.println(s1.lastIndexOf("d"));
        System.out.println(s1.substring(1));
        System.out.println(s1.substring(1,2));
        System.out.println(s1.concat(" haha"));
        System.out.println(s1.replace("world","hehe"));
        System.out.println(s1.replaceAll("o","0"));
        System.out.println(s1.matches("o"));
        System.out.println(s1.contains("o"));
        System.out.println(Arrays.toString(s1.split("o")));
        System.out.println(s1.toUpperCase());
        System.out.println("HELLOWORLD".toLowerCase());
        System.out.println("  HELLO  WORLD  ".trim());


    }
}
