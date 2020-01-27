package com.lyx.filter;

import java.util.ArrayList;
import java.util.List;

public class CriteriaSingle implements Criteria {
    @Override
    public List<Person> meetCriteria(List<Person> personList) {
        List<Person> singlePersonList = new ArrayList<>();
        for (Person person : personList) {
            if (person.getMaritalStatus().equals("single")) {
                singlePersonList.add(person);
            }

        }
        return singlePersonList;
    }
}
