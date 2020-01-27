package com.lyx.exception;

class Annoyance extends Exception {
}

class Sneeze extends Annoyance {
}

public class Human {
    public static void main(String[] args) {
        try {
            throw new Sneeze();
        } catch (Sneeze sneeze) {
            sneeze.printStackTrace();
        } catch (Annoyance annoyance) {
            annoyance.printStackTrace();
        }

        try {
            throw new Sneeze();
        } catch (Annoyance annoyance) {
            annoyance.printStackTrace();
        }
    }
}
