package com.minutecontroller.restfulwebservicestodo.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoJPARepository extends JpaRepository<ToDo, Long> {

	List<ToDo> findByUserName(String username);
}
