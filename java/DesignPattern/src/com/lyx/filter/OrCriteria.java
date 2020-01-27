package com.lyx.filter;

import java.util.List;

public class OrCriteria implements Criteria {
    private Criteria criteria;
    private Criteria otherCriteria;

    public OrCriteria(Criteria criteria, Criteria otherCriteria) {
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    @Override
    public List<Person> meetCriteria(List<Person> personList) {
        List<Person> personList1 = criteria.meetCriteria(personList);
        List<Person> personList2 = otherCriteria.meetCriteria(personList1);

        for (Person person : personList1) {
            if (personList2.contains(person)) continue;
            personList2.add(person);
        }
        return personList2;
    }
}
