package com.todo.todoapp.resource;

import com.JsonUtil;
import com.todo.todoapp.dto.TodoDTO;
import com.todo.todoapp.model.Todo;
import com.todo.todoapp.service.impl.TodoServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TodoControllerTest {

    private TodoResource todoResource;
    private TodoServiceImpl todoService;
    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);

        todoService = mock(TodoServiceImpl.class);
        todoResource = spy(new TodoResource(todoService));
        this.mockMvc = MockMvcBuilders.standaloneSetup(todoResource).build();
    }

    @Test
    public void addTodo() throws Exception {
      TodoDTO todoDTO = new TodoDTO();
        Todo todo=new Todo();
        todoDTO.setId(4545l);
        todoDTO.setTodoName("Testing Name");
        todoDTO.setDescription("Testing Description");
        todoDTO.setTime(1560860996l);
        when(todoResource.addTodo(todoDTO)).thenReturn(todo);
        this.mockMvc.perform(post("/todoApp/addTodo")
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(todo))
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void getTodos() throws Exception {
       List<Todo> listTodos = new ArrayList<>();
       Mockito.when(todoResource.getTodos("TestTodoName")).thenReturn(listTodos);
        this.mockMvc.perform(post("/todoApp/getTodoList/" + "Test1")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(listTodos)));
    }

    @Test
    public void deleteTodo() throws Exception {
        todoResource.deleteTodo(1515l);
        this.mockMvc.perform(delete("/todoApp/deleteTodo/" + 33)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void getAllTodos() throws Exception{
        List<Todo> todoList = new ArrayList<>();
        Mockito.when(todoResource.getAllTodos()).thenReturn(todoList);
        this.mockMvc.perform(post("/todoApp/getAllTodoList")
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(todoList))
                .accept(MediaType.APPLICATION_JSON));
    }

    @Test
    public void deleteMultipleTodos() throws Exception{
        List<Long> idList = new ArrayList<>();
        idList.add(100l);
        idList.add(200l);
        idList.add(101l);
        todoResource.deleteMultipleTodos(idList);
        this.mockMvc.perform(post("/todoApp/deleteMultipleTodos")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));
    }

    @Test
    public void updateTodo() throws Exception{
        TodoDTO todoDTO = new TodoDTO();
        Todo todo=new Todo();
        todoDTO.setId(4545l);
        todoDTO.setTodoName("Testing Name");
        todoDTO.setDescription("Testing Description");
        todoDTO.setTime(1560860996l);
        Mockito.when(todoResource.updateTodo(todoDTO)).thenReturn(todo);
        this.mockMvc.perform(post("/todoApp/updateTodo")
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(todo))
                .accept(MediaType.APPLICATION_JSON));
    }
}
