//
// Created by lyxxxx on 2018-12-08.
//

#include "SeqList.h"

void SeqList::Insert(int pos, int d) {
    for (int j = length; j >= pos; --j) {
        data[j + 1] = data[j];
    }
    data[pos] = d;
    length++;
}

void SeqList::Delete(int pos) {
    if (pos > 0 && pos < length) {
        for (int i = pos; i < length; ++i) {
            data[i] = data[i + 1];
        }
    }
    length--;
}

void SeqList::Update(int pos, int d) {
    data[pos] = d;
}

int *SeqList::All() {
    return data;
}

int SeqList::Get(int pos) {
    return data[pos];
}

int SeqList::Locate(int d) {
    for (int i = 0; i < length; ++i) {
        if (data[i] == d)return data[i];
    }
}

int SeqList::Clear() {
    length = 0;
}

int SeqList::Length() {
    return length;
}

void SeqList::PrintAll() {
    for (int i = 0; i < length; ++i) {
        std::cout << data[i] << ",";
    }
    std::cout << std::endl;

}

SeqList::SeqList() {
    length = 0;
}

SeqList::~SeqList() {

}

