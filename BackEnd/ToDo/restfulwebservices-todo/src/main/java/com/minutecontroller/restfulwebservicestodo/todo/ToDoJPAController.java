package com.minutecontroller.restfulwebservicestodo.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoJPAController {
  
	@Autowired 
	private ToDoHardCodedService toDoService;
	
	@Autowired 
	private ToDoJPARepository toDoJPARepository;
	
//	@PreAuthorize("hasRole('ROLE_USER_2')")
	@GetMapping("jpa/users/{username}/todos")
	public List<ToDo> getAll(@PathVariable (value = "username") String userName){
		return toDoJPARepository.findByUserName(userName);
		//return toDoService.findAll();
	}
	
	@GetMapping("jpa/users/{username}/todos/{id}")
	public ToDo getToDo(@PathVariable (value = "username") String userName,
			 				  @PathVariable (value = "id") long id){
           return toDoJPARepository.findById(id).get();
		//		return toDoService.findById(id);
	}
	
	@DeleteMapping("jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable (value = "username") String username,
			                               @PathVariable (value = "id") long id){
		//ToDo todo =toDoService.deleteById(id);
		toDoJPARepository.deleteById(id);
		 return  ResponseEntity.noContent().build();
		
		//return ResponseEntity.notFound().build();
	}
	
	@PutMapping("jpa/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable (value = "username") String username,
			                               @PathVariable (value = "id") long id,
			                               @RequestBody ToDo todo){
		//ToDo todoUpdated =toDoService.save(todo);
		
		ToDo todoUpdated =toDoJPARepository.save(todo);
		
		return new ResponseEntity<ToDo>(todoUpdated, HttpStatus.OK);
	}
	
	@PostMapping("jpa/users/{username}/todos")
	public ResponseEntity<Void> createToDo(@PathVariable (value = "username") String username,
			                               @RequestBody ToDo todo){
//		ToDo createdToDo =toDoService.save(todo);
		todo.setUserName(username);
		ToDo createdToDo =toDoJPARepository.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(createdToDo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
