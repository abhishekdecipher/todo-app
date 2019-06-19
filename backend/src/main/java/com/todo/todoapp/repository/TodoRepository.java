package com.todo.todoapp.repository;

import com.todo.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * TodoRepository
 */

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    /**
     * @implNote  Method is responsible to get todos from todo.
     */

    @Query(value = "SELECT td from Todo td where td.todoName =?1")
    List<Todo> getTodos(String todoName);

    /**
     * @implNote  Method is responsible to  delete records from Todo.
     */

    @Transactional
    @Modifying
    @Query(value = "DELETE from Todo where id=?1")
    void deleteTodo(Long todoId);

    /**
     * @implNote  Method is responsible to  delete  multiple  records from Todo.
     */
    @Transactional
    @Modifying
    @Query(value = "delete from Todo where id in ?1")
    void deleteMultipleTodos(List<Long> todoList);
}
