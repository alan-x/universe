package com.lyx.adapter;

public class AdapterPattern {
    public static void main(String[] args) {
        AudioPlayer audioPlayer = new AudioPlayer();
        audioPlayer.play("mp3","fuck");
        audioPlayer.play("mp4","fuck");
        audioPlayer.play("vlc","fuck");
    }
}
