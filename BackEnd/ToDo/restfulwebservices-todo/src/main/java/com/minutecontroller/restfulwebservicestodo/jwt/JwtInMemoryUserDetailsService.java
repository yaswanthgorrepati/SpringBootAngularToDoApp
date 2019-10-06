package com.minutecontroller.restfulwebservicestodo.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
	  // dummy: password
    inMemoryUserList.add(new JwtUserDetails(1L, "nakedbottoms",
        "$2a$10$VzvKPEp0b69vZ2APe0e91eySLLGn1RMKQnAac4bTjIaxeSQmYkkMm", "ROLE_USER_1"));
    inMemoryUserList.add(new JwtUserDetails(2L, "ranga",
            "$2a$10$VzvKPEp0b69vZ2APe0e91eySLLGn1RMKQnAac4bTjIaxeSQmYkkMm", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


