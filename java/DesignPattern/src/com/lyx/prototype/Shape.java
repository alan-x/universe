package com.lyx.prototype;

/**
 * Created by FollowWinter on 10/1/16.
 */
public abstract class Shape implements Cloneable {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    private String id;

    public String getType() {
        return type;
    }

    protected String type;
    abstract void draw();
    public Object clone(){
        Object clone=null;
        try {
            clone=super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return clone;
    }


}
