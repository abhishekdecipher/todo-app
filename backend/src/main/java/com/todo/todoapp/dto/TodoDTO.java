package com.todo.todoapp.dto;


import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class TodoDTO{
    @Id
    @NotNull
    private Long id;

    @NotNull
    private String todoName;

    @NotNull
    private String description;

    @NotNull
    private Long time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTodoName() {
        return todoName;
    }

    public void setTodoName(String todoName) {
        this.todoName = todoName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }
}
