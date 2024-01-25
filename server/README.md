# APIs

- Sign up localhost:3002/api/v1/signup - POST request object:

Request object:
```
{
    email: <email>,
    password: <password>,
    username: <username>
}
```

success response object:
```
{
    "success": true,
    "message": "Successfully created a new user",
    "data": {
        "email": "santu@gmail.com",
        "password": "$2b$09$SoD6Fz4Ur1AQsJ5sfpERq.z3iPXDFEUyaPRl9MxgOHXC5ffnVXMjm",
        "username": "Santosh",
        "_id": "6548dcea67a9a82bc38f529b",
        "createdAt": "2023-11-06T12:32:42.594Z",
        "updatedAt": "2023-11-06T12:32:42.594Z",
        "__v": 0
    },
    "err": {}
}
```

- Sing in localhost:3002/api/v1/login - POST request object:

Request object:
```
{
    email: <email>,
    password: <password>
}
```

success response object:

```
{
  "success": true,
  "message": "Successfully logged in",
  "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDhkY2VhNjdhOWE4MmJjMzhmNTI5YiIsImVtYWlsIjoic2FudHVAZ21haWwuY29tIiwiaWF0IjoxNjk5Mjc0Nzc4LCJleHAiOjE2OTkyNzgzNzh9.coFvKeYXnaEu2vE6naRsp-0SxLQv-m2OUznZIYlmwnI",
  "err": {}
} 
```

- Create post localhost:4000/api/v1/posts

Request object:

```
title: <title>,
userId: <userId>,
username: <username>,
content: <content>
```

success response object:

```
{
    "title": "Here is the my title of the content",
    "userId": "65af982e0650f8f7baea6832",
    "username": "santosh",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, ullamcorper est a, accumsan purus. Integer sed urna vel nisl tristique eleifend. Nullam eget luctus lacus, ut dapibus urna. Nam ac sem in elit tristique vulputate.",
    "_id": "65b26093d744a73b618f8fe2",
    "comments": [],
    "createdAt": "2024-01-25T13:22:27.800Z",
    "updatedAt": "2024-01-25T13:22:27.800Z",
    "__v": 0
}
```

- Create comment localhost:4000/api/v1/posts/65b148b517cb1496ba633e27/comments

Request object:
```
{
    postId: <postId>
    comment: <comment>
    userId: <userId>
    username: <username>
}
```

success response object:

```
{
    "_id": "65b147b8e0f2e8c17f47fed1",
    "title": "this is the something",
    "userId": "65af982e0650f8f7baea6832",
    "username": "santosh",
    "content": "this is the post description for this topic lorem ipsum is simpley",
    "comments": [
        {
            "comment": "this is first comment",
            "userId": "65af982e0650f8f7baea6832",
            "username": "santosh",
            "_id": "65b14d6315bfe5b67fb418ce",
            "replies": []
        }
    ],
    "createdAt": "2024-01-24T17:24:08.947Z",
    "updatedAt": "2024-01-24T17:48:19.274Z",
    "__v": 1
}
```

- Create reply localhost:4000/api/v1/posts/65b148b517cb1496ba633e27/comments/65b14ae115bfe5b67fb418c7/replies

Request object:

```
{
    postId: <postId>
    reply: <reply>
    userId: <userId>
    username: <username>
}
```

success response object:

```
{
    "_id": "65b148b517cb1496ba633e27",
    "title": "this is the something",
    "userId": "65af982e0650f8f7baea6832",
    "username": "santosh",
    "content": "this is the post description for this topic lorem ipsum is simpley",
    "comments": [
        {
            "comment": "this is first comment",
            "userId": "65af982e0650f8f7baea6832",
            "username": "santosh",
            "_id": "65b14ae115bfe5b67fb418c7",
            "replies": [
                {
                    "reply": "first reply on a comment",
                    "userId": "65af982e0650f8f7baea6832",
                    "username": "santosh",
                    "_id": "65b14c4415bfe5b67fb418cb"
                }
            ]
        }
    ],
    "createdAt": "2024-01-24T17:28:21.416Z",
    "updatedAt": "2024-01-24T17:43:32.807Z",
    "__v": 2
}
```