# CDK Demo Lambda to Initial Load New RDS database

This stack will creates:

1. A new VPC with public and private subnet.
2. A database subnet group. 
3. RDS MySQL Single AZ.
4. Lambda function to load the data sample (employees data).
5. Custom Resource to invoke lambda once RDS has been created successfully.
6. An EC2 instance to connect to the RDS and validate the data.

For load multiple values, we need to use `cursor.executemany`.

```
values = ast.literal_eval(values)
cursor.executemany(script,values)
```

In every cycle we need to do `connection.commit()`

Employees data was taken from https://github.com/datacharmer/test_db
