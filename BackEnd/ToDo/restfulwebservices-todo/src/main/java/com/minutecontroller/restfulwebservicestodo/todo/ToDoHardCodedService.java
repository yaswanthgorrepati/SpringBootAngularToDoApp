package com.minutecontroller.restfulwebservicestodo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoHardCodedService {
	private static List<ToDo> toDos = new ArrayList<ToDo>();
	private static long index = 0;

	static {
		toDos.add(new ToDo(++index, "Learn to Dance", "nakedbottoms", new Date(), false));
		toDos.add(new ToDo(++index, "Learn doing microservices", "nakedbottoms", new Date(), false));
		toDos.add(new ToDo(++index, "Learn building Angular", "nakedbottoms", new Date(), false));
	}

	public List<ToDo> findAll() {
		return toDos;
	}
	
	public ToDo save(ToDo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++index);
			toDos.add(todo);
		}else {
			deleteById(todo.getId());
			toDos.add(todo);
		}
		return todo;
	}


	public ToDo deleteById(long id) {
		ToDo todo = findById(id);

		if (todo == null)
			return null;

		if (toDos.remove(todo))
			return todo;

		return null;
	}
	
	public ToDo findById(long id) {
		for (ToDo todo : toDos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}


}
