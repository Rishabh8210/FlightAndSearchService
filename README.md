# Welcome to Flights Service

## Project setup
- Clone the project on your local.
- Execute `npm insall` on the same path as of your root directory of the clonned / downloaded project.
- Create a `.env` file in the root diretory and add the following environment variables.
    - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_BD_PASSWORD>",
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db configuration as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## Database Design
  - Flight
  - City
  - Airport
  - Airplane Table

  - ### Associations
  - A flight belongs to an airplane bbut one airplane can be used in multiple flights
  - A city has many airport but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport.

## Tables 

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
  - #### Relationship
    - City has many Airports and Airport belongs to a city (one to many)
  

## Other microservices
- [Auth Service](https://github.com/Rishabh8210/AuthService.git)
- [Booking Service](https://github.com/Rishabh8210/AirTicketBookingService.git)
- [Remainder Service](https://github.com/Rishabh8210/RemainderService.git)


![image](https://github.com/user-attachments/assets/12305222-cbc7-487f-b962-46961fec1836)

