# Query

```

```

# Mutations

```graphql
mutation AddSubscription($name: String!) {
  addSubscription(name: $name) {
    subscription {
      id
      name
    }
  }
}

mutation AddApplication(
  $country: String!
  $name: String!
  $subscriptionid: Int!
) {
  addApplication(
    name: $name
    country: $country
    subscriptionid: $subscriptionid
  ) {
    application {
      id
      name
      apiUri
      clientId
      secretKey
      country
      subscription {
        id
        name
      }
    }
  }
}

mutation AddUserAccess($appid: Int!, $permissionid: Int!) {
  addUserAccess(appid: $appid, permissionid: $permissionid) {
    useraccess {
      id
      permission
      user {
        id
        username
      }
      appId {
        id
        name
      }
    }
  }
}

mutation AddApplicationEnvVariables(
  $appid: Int!
  $envkey: String!
  $value: String!
) {
  addApplicationEnvVariables(appid: $appid, envkey: $envkey, value: $value) {
    applicationEnvVariables {
      id
      envKey
      value
      appId {
        id
        name
      }
    }
  }
}

mutation AddApplicationDBase(
  $appId: Int!
  $dbname: String!
  $host: String!
  $password: String!
  $portNumber: Int!
  $type: String!
  $userName: String!
) {
  addApplicationDBase(
    appId: $appId
    dbname: $dbname
    host: $host
    password: $password
    portNumber: $portNumber
    type: $type
    userName: $userName
  ) {
    applicationDBase {
      id
      dbname
      host
      password
      portNumber
      type
      userName
    }
  }
}

mutation AddApplicationCustomQuery(
  $appId: Int!
  $code: String!
  $frequency: Int!
  $interval: Int!
  $name: String!
) {
  addApplicationCustomQuery(
    appId: $appId
    code: $code
    frequency: $frequency
    interval: $interval
    name: $name
  ) {
    applicationCustomQuery {
      id
      appId {
        id
        name
        secretKey
      }
      code
      frequency
      interval
      name
    }
  }
}

mutation AddApplicationCustomMutation(
  $appId: Int!
  $code: String!
  $frequency: Int!
  $interval: Int!
  $name: String!
) {
  addApplicationCustomMutation(
    appId: $appId
    code: $code
    frequency: $frequency
    interval: $interval
    name: $name
  ) {
    applicationCustomMutation {
      id
      appId {
        id
        name
        secretKey
      }
      code
      frequency
      interval
      name
    }
  }
}
```
