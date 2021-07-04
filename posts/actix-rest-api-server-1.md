---
title: "Developing a RESTful API server with Actix Web, PostgreSQL and Diesel on Docker: I. API spec."
date: "2021-07-04"
---

# API spec.

| Methods | Endponts    | Functions                    |
| :------ | :---------- | :--------------------------- |
| GET     | /todos      | Get the list of all todos.   |
| POST    | /todos      | Create a todo.               |
| GET     | /todos/{id} | Get the details of the todo. |
| PATCH   | /todos/{id} | Update the todo.             |
| DELETE  | /todos/{id} | Delete the todo.             |

## GET /todos

Get the list of all todos.

### Response

```json
{
  "todos": [
    {
      "id": 1,
      "title": "象の散歩",
      "complete": false
    },
    {
      "id": 2,
      "title": "サボテンの水やり",
      "complete": true
    }
  ]
}
```



## POST /todos

Create a todo.

### Params

```json
{
  "title": "エビの収穫"
}
```

### Response

On success:

```json
{
  "message": "Created successfully."
}
```

On failure:

```json
{
  "message": "Creation failed: {reason}"
}
```



## GET /todos/{id}

### Response

On success:

```json
{
  "id": 1,
  "title": "象の散歩",
  "complete": false
}
```

On failure:

```json
{
  "message": "Todo with id {} does not exist."
}
```



## PATCH /todos/{id}

### Params

```json
{
  "complete": true
}
```

### Response

On success:

```json
{
  "message": "Updated successfully."
}
```

On error:

```json
{
  "message": "Update failed: {reason}"
}
```



## DELETE /posts/{id}

### Response

On success:

```json
{
  "message": "Deleted successfully."
}
```

On error:

```json
{
  "message": "Deletion failed: {reason}"
}
```

