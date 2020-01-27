package com.lyx.visitor;

public interface ComputerPartVisitor {

    void visitor(Keyboard keyboard);

    void visitor(Monitor monitor);

    void visitor(Mouse mouse);
}
