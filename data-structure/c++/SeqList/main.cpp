#include <iostream>
#include "SeqList.cpp"

int main() {
    std::cout << "线性表" << std::endl;

    SeqList seqList;

    std::cout << "增加" << std::endl;
    seqList.Insert(seqList.Length(), 1);
    seqList.Insert(seqList.Length(), 2);
    seqList.Insert(seqList.Length(), 3);
    seqList.Insert(seqList.Length(), 4);
    seqList.Insert(seqList.Length(), 5);
    seqList.Insert(seqList.Length(), 6);

    seqList.PrintAll();

    int data = seqList.Get(1);
    std::cout << "获取：" << data << std::endl;

    data = seqList.Locate(1);
    std::cout << "定位：" << data << std::endl;

    std::cout << "更新：" << std::endl;
    seqList.Update(1, 100);
    seqList.PrintAll();

    std::cout << "删除：" << std::endl;
    seqList.Delete(2);
    seqList.PrintAll();

    std::cout << "清理：" << std::endl;
    seqList.Clear();
    seqList.PrintAll();
    return 0;
}