package com.lyx.exception;

class Switch {
    private boolean state = false;

    public boolean read() {
        return state;
    }

    public void on() {
        state = true;
        System.out.println(this);
    }

    public void off() {
        state = false;
        System.out.println(this);
    }

    @Override
    public String toString() {
        return state ? "on" : "false";
    }

}

class OnOffException1 extends Exception {
}

class OnOffException2 extends Exception {
}

class OnOffSwitch {
    private static Switch aSwitch = new Switch();

    public static void f() throws OnOffException1, OnOffException2 {
        throw new OnOffException1();
    }

    public static void main(String[] args) {
        try {
            aSwitch.on();
            f();
        } catch (OnOffException2 onOffException2) {
            System.out.println("OnOffException2 ");
            onOffException2.printStackTrace();
        } catch (OnOffException1 onOffException1) {
            System.out.println("OnOffException1 ");
            onOffException1.printStackTrace();
        } finally {
            aSwitch.off();
        }
    }
}