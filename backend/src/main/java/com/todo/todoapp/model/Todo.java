package com.todo.todoapp.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
public class Todo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @NotEmpty(message = "Please provide a todo name")
    @Column(name = "todo_name")
    private String todoName;

    @NotNull
    @NotEmpty(message = "Please provide a todo description")
    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "time")
    private Long time;

    public Todo(){}

    /**
     * Getter
     *
     * @return Id
     */
    public Long getId() {
        return id;
    }

    /**
     * Setter
     *
     * @param id : Id
     */

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Getter
     *
     * @return todoname
     */
    public String getTodoName() {
        return todoName;
    }
    /**
     * Setter
     *
     * @param todoName : todoname
     */

    public void setTodoName(String todoName) {
        this.todoName = todoName;
    }

    /**
     * Getter
     *
     * @return description
     */

    public String getDescription() {
        return description;
    }

    /**
     * Setter
     *
     * @param description : description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter
     *
     * @return time
     */
    public Long getTime() {
        return time;
    }

    /**
     * Setter
     *
     * @param time : time
     */
    public void setTime(Long time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "todoName='" + todoName + '\'' +
                ", description='" + description + '\'' +
                ", time=" + time +
                '}';
    }
}
