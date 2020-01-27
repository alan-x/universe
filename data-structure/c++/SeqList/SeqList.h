//
// Created by lyxxxx on 2018-12-08.
//

#ifndef C_SEQLIST_H
#define C_SEQLIST_H

const int MAX_SIZE = 100;

class SeqList {
public:
    SeqList();

    void Insert(int pos, int d);

    void Delete(int pos);

    void Update(int pos, int d);

    int *All();

    int Get(int pos);

    int Locate(int d);

    int Clear();

    int Length();

    void PrintAll();

    ~SeqList();

private:
    int data[MAX_SIZE];
    int length;
};

#endif //C_SEQLIST_H