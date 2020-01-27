package com.lyx.anotation;

public class PasswordUtils {
    @UserCase(id = 1, description = "fuck")
    public boolean validatePassword(String password) {
        return (password.matches("\\w*\\d\\w*"));
    }
}
