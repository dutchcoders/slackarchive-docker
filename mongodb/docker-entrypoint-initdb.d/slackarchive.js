db.createUser({
    user: 'slackarchive',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'slackarchive'}
    ]
})
