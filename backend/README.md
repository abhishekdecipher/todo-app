# Steps for running the project

1. Just run this spring boot application.

## Setting Up Database
1. Go to H2 database url to check that it's up or not.

### Configuration  
   http://localhost:8085/h2-console <br/>
   jdbc url = jdbc:h2:./tododb <br/>
   username = sa <br/>
   password = password <br/>
   
## Todo Operations:

### Adding Todo
1. Now you can create new data in database via API's
2. just hit create todo API
    => `localhost:8085/todoApp/addTodo` <br/>
    sample json:    
    {
        "id": 4,
        "todoName": "Dze",
        "description": "An event is going to held by this Afternoon",
        "time": 1560503318000
    }

### Get all Todos
1. Now you can hit get all todos API's
   => `localhost:8085/todoApp/getAllTodos`
     
### Update a Todo 
   => `localhost:8085/todoApp/updateTodo` <br/>
    sample json for update Todo
     {
     	"id":4,
     	"todoName":"ABCD",
     	"description":"An test is going to held by yesterday",
     	"time":1560503318000
     }
     
### Delete single Todo
   => `localhost:8085/todoApp/deleteTodo/1`
   => 1 is id of Todo to be deleted
    

### Delete multiple todos 
   => `localhost:8085/todoApp/deleteMultipleTodos` </br>
     sample json for this api
       [2,3] => Are list of Todos id to be deleted
 
        
    
   
   

