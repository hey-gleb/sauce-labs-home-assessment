
# FizzBuzzBass Back-end application

Server application for playing FizzBuzzBass game. Provides functionality to receive some numeric value and respond if it's Fizz/Buzz/Bass value.



## Run Locally

Clone the project

```bash
  git clone git@github.com:hey-gleb/sauce-labs-home-assessment.git
```

Go to the project directory

```bash
  cd fizzbuzzbass-backend
```

Create virtualenv

```bash
virtualenv venv --python=python3.10
source venv/bin/activate
```

Install dependencies

```bash
  pip install -r requirements/development.txt
```

Start the server

```bash
  make start
```


## Running Tests

To run tests, run the following command

```bash
  make test
```


## API Reference

#### Submit game value

```http
  POST /api/game/turn
```

Request body
| Property  | Type       | Description                        |
| :-------- | :-------   | :----------------------------------|
| `gameValue` | `number` | **Required**. Submitted game value |

Response body
| Property  | Type       | Description                        |
| :-------- | :-------   | :----------------------------------|
| `result` | `string` | **Required**. Game result: Fizz, Buzz, Bass or input number |

## Documentation

To access the documentation, run the server application and access the following pages:
- [Swagger](http://localhost:8000/docs)
- [OpenAPI](http://localhost:8000/openapi.json)

