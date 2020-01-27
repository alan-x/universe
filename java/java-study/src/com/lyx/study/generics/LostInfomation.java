package com.lyx.generics;

import java.util.*;

class Frob{}
class Fnorkle{}
class Quark<Q>{}
class Particle<POSITION,MOMENTUM>{}

public class LostInfomation {
    public static void main(String[] args) {
        ArrayList<Frob> frobArrayList = new ArrayList<>();
        HashMap<Frob, Fnorkle> frobFnorkleHashMap = new HashMap<Frob, Fnorkle>();
        Quark<Fnorkle> fnorkleQuark = new Quark<>();
        Particle<Long, Double> longDoubleParticle = new Particle<>();
        System.out.println(Arrays.toString(frobArrayList.getClass().getTypeParameters()));
        System.out.println(Arrays.toString(frobFnorkleHashMap.getClass().getTypeParameters()));
        System.out.println(Arrays.toString(fnorkleQuark.getClass().getTypeParameters()));
        System.out.println(Arrays.toString(longDoubleParticle.getClass().getTypeParameters()));

    }
}
