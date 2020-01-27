package com.lyx.server.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by FollowWinter on 05/12/2016.
 */
public class Reg {
    static public List<String> find(String content, String reg) {
        List<String> resultList = new ArrayList<String>();
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(content);
        while (matcher.find()) {
            resultList.add(matcher.group());
        }
        return resultList;
    }
}
