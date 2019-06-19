package com.todo.todoapp.resource;

import com.todo.todoapp.dto.TodoDTO;
import com.todo.todoapp.model.Todo;
import com.todo.todoapp.service.TodoService;
import com.todo.todoapp.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Constants.BASE)
@CrossOrigin
public class TodoResource {


    private TodoService todoService;

    @Autowired
    public TodoResource(TodoService todoService) {
        this.todoService = todoService;

    }

    /**
     * @apiNote api  is responsible to get add record in DB.
     */

    @PostMapping("/addTodo")
    public Todo addTodo(@RequestBody TodoDTO todoDTO) {
        return todoService.addTodo(todoDTO);
    }

    /**
     * @apiNote api  is responsible to return records from DB.
     */
    @GetMapping("/getTodoList/{todoName}")
    public List<Todo> getTodos(@PathVariable final String todoName) {
        List<Todo> todoList = todoService.getTodos(todoName);
        return todoList;
    }

    /**
     * @apiNote api  is responsible to get all todos request from DB.
     */
    @GetMapping("/getAllTodoList")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    /**
     * @apiNote api is responsible to delete record from DB.
     */
    @DeleteMapping("/deleteTodo/{todoId}")
    public void deleteTodo(@PathVariable final Long todoId) {
        todoService.deleteTodo(todoId);
    }

    /**
     * @apiNote api is responsible to delete  multiple record from DB.
     */
    @DeleteMapping("/deleteMultipleTodos/{todoList}")
    public void deleteMultipleTodos(@PathVariable final List<Long> todoList) {
        todoService.deleteMultipleTodos(todoList);
    }

    /**
     * @apiNote api is responsible to update todos.
     */
    @PutMapping("/updateTodo")
    public Todo updateTodo(@RequestBody final TodoDTO todoDTO) {
        return todoService.updateTodo(todoDTO);
    }
}
