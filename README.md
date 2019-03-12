# Mentor Me - Back End

Mentor me app let entrepreneurs who are just starting out or small business owners to ask for advices or guidances on various business topics from (qualified) business professionals working in the industries for free.

# RESTful API Endpoints

## Register - POST

https://bw-mentor-me.herokuapp.com/api/register

```
Argument
  {
    "username": "string",
    "password": "string",
    "name": "string",
    "email": "string",
    "role": "string",
  }
```

```
Return
{
"message": "Registration successful",
"user_id": number,
"token": “abcd"
}
```

## Login - POST

https://bw-mentor-me.herokuapp.com/api/login

```
Arguments
  {
    "username": “string",
    "password": “string"
  }
```

```
Return
  {
    "message": "Registration successful",
    "user_id": number,
    "token": “abcd"
  }
```

## Questions - GET

https://bw-mentor-me.herokuapp.com/api/questions

```
Return
  [
    {
      "post_id": number,
      "post": “string",
      "description": “string",
      "category": “string",
      "user_id": number,
      "name": “string",
      "photo": “string"
    }
  ]
```

## User by id - GET

https://bw-mentor-me.herokuapp.com/api/user/1

```
Return
  {
    "user_id": number,
    "username": “string",
    "name": “string",
    "email": “string",
    "role": “string",
    "about": “string",
    "photo": “string"
  }
```

## Delete user by id - DELETE

https://bw-mentor-me.herokuapp.com/api/user/6

Note: cannot delete user if they have messages.

```
Return
  {
    "message": "User successfully deleted"
  }
```

## Post - POST

https://bw-mentor-me.herokuapp.com/api/posts

```
Argument
  {
    “post": “string",
    “description": “string”,
    “category”: “string"
    “type": “string”,
    “user_fk": number
    "conversation_fk": number  // optional
  }
```
