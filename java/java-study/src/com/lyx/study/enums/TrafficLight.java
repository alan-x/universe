package com.lyx.enums;

enum Signal {GREEN, RED, YELLOW}

public class TrafficLight {
    Signal color = Signal.GREEN;

    public void change() {
        switch (color) {
            case GREEN: {
                color = Signal.RED;
                break;
            }
            case RED: {
                color = Signal.YELLOW;
                break;
            }
            case YELLOW: {
                color = Signal.GREEN;
                break;
            }
        }
    }

    @Override
    public String toString() {
        return color + "";
    }

    public static void main(String[] args) {
        TrafficLight trafficLight = new TrafficLight();
        for (int i = 0; i < 10; i++) {
            System.out.println(trafficLight);
            trafficLight.change();
        }

    }
}
