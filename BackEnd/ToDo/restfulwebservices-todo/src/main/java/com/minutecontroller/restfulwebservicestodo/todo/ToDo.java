package com.minutecontroller.restfulwebservicestodo.todo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ToDo {
	
	@Id
	@GeneratedValue
	private Long id;
	private String description;
	private String userName;
	private Date targetDate;
	private boolean isCompleted;

	public ToDo() {
		
	}
	
	public ToDo(Long id, String description, String userName, Date targetDate, boolean isCompleted) {
		this.id = id;
		this.description = description;
		this.userName = userName;
		this.targetDate = targetDate;
		this.isCompleted = isCompleted;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ToDo other = (ToDo) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
