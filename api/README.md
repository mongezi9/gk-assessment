## 1. Install Firefox
Visit the Mozilla Firefox website: https://www.mozilla.org/en-US/firefox/new/

## 2. git clone

```sh
$ git clone <project>
$ cd gk/api
$ npm install 
```
this will install newman to run our postman test via CLI

## 3. Run tests
To run the tests using Firefox simply run the command:

```sh
$ npm newman_test
```

### 4. Report
**CLI logs/report**
```sh
npm run newman_test

> api@1.0.0 newman_test C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\api
> newman run openweathermap_suite.postman_collection.json -e envs.postman_globals.json --reporters htmlextra,cli --reporter-htmlextra-export ./newman/report.html
Using htmlextra version 1.20.3
newman

openweathermap suite

□ current_weather_data / by_city_name
└ TC-01 | Can get city data when providing correct data
  GET api.openweathermap.org/data//2.5/weather?q=London&appid=6aa46c888a6e3fa4f0e9195c9a6e3a01 [200 OK, 797B, 624ms]
  √  Status code is 200
  √  Schema is valid

└ TC-02 | Unable to get city data, when invalid is supplied
  GET api.openweathermap.org/data//2.5/weather?q=L%23$%^%26*()_&appid=6aa46c888a6e3fa4f0e9195c9a6e3a01 [404 Not Found, 375B, 358ms]
  √  Status code is 400
  √  Schema is valid

□ weather_stations / create_station
└ TC-01 | Should register stations when providing correct data
  POST api.openweathermap.org/data//3.0/stations?appid=6aa46c888a6e3fa4f0e9195c9a6e3a01 [201 Created, 600B, 359ms]
  √  Status code is 201
  √  Schema is valid

└ TC-02 | Should not able to register stations when providing incorrect data
  POST api.openweathermap.org/data//3.0/triggers?appid=6aa46c888a6e3fa4f0e9195c9a6e3a01 [500 Internal Server Error, 632B, 534ms]
  √  Status code is 500

┌─────────────────────────┬─────────────────────┬────────────────────┐
│                         │            executed │             failed │
├─────────────────────────┼─────────────────────┼────────────────────┤
│              iterations │                   1 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│                requests │                   4 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│            test-scripts │                   4 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│      prerequest-scripts │                   0 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│              assertions │                   7 │                  0 │
├─────────────────────────┴─────────────────────┴────────────────────┤
│ total run duration: 3.3s                                           │
├────────────────────────────────────────────────────────────────────┤
│ total data received: 966B (approx)                                 │
├────────────────────────────────────────────────────────────────────┤
│ average response time: 468ms [min: 358ms, max: 624ms, s.d.: 114ms] │
└────────────────────────────────────────────────────────────────────┘
```

**HTML report**
> ![image](https://user-images.githubusercontent.com/16255228/114111839-45214480-98db-11eb-9e95-2e4450ff3082.png)