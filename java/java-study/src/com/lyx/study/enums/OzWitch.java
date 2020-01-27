package com.lyx.enums;

public enum OzWitch {
    WEST("WEST"),
    NORTH("NORTH"),
    EAST("EAST"),
    SOUTH("SOUTH");
    private String description;

    OzWitch(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public static void main(String[] args) {
        for (OzWitch ozWitch : OzWitch.values()) {
            System.out.println(ozWitch);
        }
    }
}
