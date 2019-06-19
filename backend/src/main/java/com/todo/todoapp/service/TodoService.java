package com.todo.todoapp.service;

import com.todo.todoapp.dto.TodoDTO;
import com.todo.todoapp.model.Todo;

import java.util.List;

public interface TodoService {

    /**
     * @param todoDTO : todoDTO
     * @implNote Method is responsible to save  request into DB
     */
    Todo addTodo(final TodoDTO todoDTO);

    /**
     * @return List of todoName
     * @implNote Method is responsible to get  todos
     */
    List<Todo> getTodos(final String todoName);

    /**
     * @implNote Method is responsible to get all todos
     */
    List<Todo> getAllTodos();
    /**
     * @param id : id
     * @implNote Method is responsible to delete from DB
     */
    void deleteTodo(final Long id);
    /**
     * @param todoIds : todoIds
     * @implNote Method is responsible to delete multiple records from DB
     */
    void deleteMultipleTodos(final List<Long> todoIds);

    /**
     * @param  todoDTO : todoDTO
     * @implNote Method is responsible to update records.
     */
    Todo updateTodo(final TodoDTO todoDTO);
}
