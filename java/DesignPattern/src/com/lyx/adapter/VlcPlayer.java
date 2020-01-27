package com.lyx.adapter;

public class VlcPlayer implements AdvancedMediaPlayer {
    @Override
    public void playVlc(String fileName) {
        System.out.println("vlc:" + fileName);
    }

    @Override
    public void playMp4(String fileName) {

    }
}
