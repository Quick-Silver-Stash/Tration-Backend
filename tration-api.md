# Tration API

## POST Method

### Register
#### URL
https://us-central1-trationapp.cloudfunctions.net/register

#### Data
{
	"firstName" : "test",
	"lastName" : "user",
	"email" : "test.email@email.test",
	"password" : "pass"
}

### Login
#### URL
https://us-central1-trationapp.cloudfunctions.net/login

#### Data
{
	"email": "test.user@test.test.email",
	"password": "testpassword"
}

### Logout
#### URL
https://us-central1-trationapp.cloudfunctions.net/logout

#### Data
{}

## GET Method