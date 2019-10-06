package com.minutecontroller.restfulwebservicestodo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncode {
    
	public static void main(String[] args) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		for(int i=0;i<10;i++) {
			String encodedpassword = bCryptPasswordEncoder.encode("dummy");
			System.out.println(encodedpassword);
		}
	}
}
