package com.minutecontroller.restfulwebservicestodo.helloworld;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
          
	@GetMapping(path = "/helloworld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/helloworldbean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World-modified");
//		throw new RuntimeException("An error occured");
	}
	
//	@PreAuthorize("hasRole('ROLE_USER_1')")
	@GetMapping(path = "/helloworldbean/pathvariable/{Name}")
	public HelloWorldBean helloWorldBeanParam(@PathVariable(value = "Name") String name) {
		return new HelloWorldBean("Hello World"+" ,"+name);
	}
}
