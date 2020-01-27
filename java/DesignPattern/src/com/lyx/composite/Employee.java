package com.lyx.composite;

import java.util.ArrayList;
import java.util.List;

public class Employee {
    private String job;
    private String name;
    private String salary;
    private List<Employee> employeeList;

    public Employee(String job, String name, String salary) {
        this.job = job;
        this.name = name;
        this.salary = salary;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public void add(Employee employee) {
        if (this.employeeList == null) {
            this.employeeList = new ArrayList<>();
        }
        employeeList.add(employee);
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder(job + ":" + name + ":" + salary + "\n");
        if (employeeList!=null){
            for (Employee employee : employeeList) {
                result.append(employee.toString());
            }
        }
        return result.toString();
    }
}
