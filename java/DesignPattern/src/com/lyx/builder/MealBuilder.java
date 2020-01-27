package com.lyx.builder;

/**
 * Created by FollowWinter on 9/30/16.
 */
public class MealBuilder  {
    public Meal prepareVegMeal(){
        Meal meal=new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    public Meal prepareNonVegMead(){
        Meal meal=new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pipsi());
        return  meal;
    }
}
