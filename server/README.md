## comment  url 

- http://localhost:4000/api/v1/posts/65b148b517cb1496ba633e27/comments

- query:

```
postId:
comment:
userId:
username:
```

- respone object:

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


## reply url

- http://localhost:4000/api/v1/posts/65b148b517cb1496ba633e27/comments/65b14ae115bfe5b67fb418c7/replies

- query:

```
{
    postId:
    reply: 
    userI: 
    username:
}
```

- response object:
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