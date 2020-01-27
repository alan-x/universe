package com.lyx.exception;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class InputFile {
    private BufferedReader in;

    public InputFile(String name) throws FileNotFoundException {
        try {
            in = new BufferedReader(new FileReader(name));

        } catch (FileNotFoundException e) {
            System.out.println("could not open file");
            throw e;
        } catch (Exception e) {
            try {
                in.close();
            } catch (IOException e1) {
                System.out.println("in.close() failure");
            }
            throw e;
        } finally {

        }
    }

    public String getLine() {
        String s = null;
        try {
            s = in.readLine();
        } catch (IOException e) {
            System.out.println("read failure");
        }
        return s;
    }

    public void dispose() {
        try {
            in.close();
            System.out.println("dispose() success");
        } catch (IOException e) {
            throw new RuntimeException("in.close() failure");
        }
    }
}
