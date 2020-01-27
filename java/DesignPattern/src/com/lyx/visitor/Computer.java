package com.lyx.visitor;

public class Computer implements ComputerPart {
    ComputerPart[] computerParts;

    public Computer() {
        computerParts = new ComputerPart[]{new Keyboard(), new Monitor(), new Mouse()};
    }

    @Override
    public void accept(ComputerPartVisitor computerPartVisitor) {
        for (ComputerPart computerPart : computerParts) {
            computerPart.accept(computerPartVisitor);
        }
    }
}
