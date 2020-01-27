package com.lyx.visitor;

public class ComputerPartDisplayVisitor implements ComputerPartVisitor {
    @Override
    public void visitor(Keyboard keyboard) {
        System.out.println("keybord");
    }

    @Override
    public void visitor(Monitor monitor) {
        System.out.println("monitor");

    }

    @Override
    public void visitor(Mouse mouse) {
        System.out.println("mouse");
    }
}
