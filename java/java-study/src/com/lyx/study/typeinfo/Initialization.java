package com.lyx.typeinfo;

import java.util.Random;

class Initable {
    static final int staticFinal = 47;
    static final int staticFinal2 = Initialization.random.nextInt(1000);
    static {
        System.out.println("Initializing Initable");
    }

}
class Initable2{
    static int staticNonfinal=147;
    static {
        System.out.println("Initializing Initable2");
    }
}
class Initable3{
    static int staticNonFinal=74;
    static {
        System.out.println("Initializing Initable3");
    }
}


public class Initialization {
    public static Random random = new Random(47);

    public static void main(String[] args) throws ClassNotFoundException {
        Class initable=Initable.class;
        System.out.println("After create Initable ref");
        System.out.println(Initable.staticFinal);
        System.out.println(Initable.staticFinal2);
        System.out.println(Initable2.staticNonfinal);
        Class initable3=Class.forName("com.lyx.typeinfo.Initable3");
        System.out.println("After create Initable3 ref");
        System.out.println(Initable3.staticNonFinal);

    }
}

