package com.lyx.study.operation;

public class Operation {
    public static void main(String args[]) {
//        算数运算符
        int num1 = 1, num2 = 2;
        System.out.println("算数运算符");
        System.out.println(num1 + num2);
        System.out.println(num1 - num2);
        System.out.println(num1 / num2);
        System.out.println(num1 * num2);
        System.out.println(num1 % num2);
//        自增自减
        System.out.println("自增自减");
        System.out.println(num1++);
        System.out.println(num1);
        System.out.println(num1--);
        System.out.println(num1);
        System.out.println(++num1);
        System.out.println(--num1);
//        关系操作符
        System.out.println("关系操作符");
        System.out.println((num1 < num2));
        System.out.println((num1 > num2));
        System.out.println(num1 == num2);
        System.out.println(num1 != num2);
//        逻辑操作符
        System.out.println("逻辑操作符");
        boolean boolean1 = false;
        boolean boolean2 = true;
        System.out.println(boolean1 && boolean2);
        System.out.println(boolean1 || boolean2);
        System.out.println(!boolean1);

//        直接常量
        System.out.println("直接常量");
        int i1 = 0x2f;
        int i2 = 0x2F;
        int i3 = 0177;
        char c1 = 0xffff;
        byte b1 = 0x7f;
        short s1 = 0x7f;
        long l1 = 100L;
        long l2 = 100l;
        float f1 = 1;
        float f2 = 1f;
        float f3 = 1F;
        double d1 = 1d;
        double d2 = 1D;
        System.out.println(i1);
        System.out.println(i2);
        System.out.println(i3);
        System.out.println(c1);
        System.out.println(b1);
        System.out.println(s1);
        System.out.println(l1);
        System.out.println(l2);
        System.out.println(f1);
        System.out.println(f2);
        System.out.println(f3);
        System.out.println(d1);
        System.out.println(d2);
//        三元运算符
        System.out.println("三元运算符");
        int a = 0;
        boolean isSuccess = false;
        a = isSuccess ? 1 : 2;
        System.out.println(a);

//        字符串+/+=
        String str = "";
        str = str + "1";
        str += "2";
        System.out.println(str);

//        类型转化
        System.out.println("类型转换");
        int i = 100;
        long long1 = (long) i;
        System.out.println(long1);
        long1 = i;
        System.out.println(long1);
        long long2 = (long) 200;
        System.out.println(long2);
        i = (int) long1;
        System.out.println(i);

        float float1=0.1f;
        float float2=0.9f;
        System.out.println((int) float1);
        System.out.println((int) float2);
    }

}
