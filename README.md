# order-report

## Project Setup
1. Install all node dependencies \
```npm install```

## Ingest, Summary & Generate report
1. To ingest file run ```npm run ingest ./input/report.xlsx```
2. To get summary of sales of ingested file run ```npm run summary Produce 2018 11```
3. To generate report run ```npm run generate_report report.csv``` 

## Unit Test
```npm run test```

## Packages & Library
1. ```xlsx``` - this package is used to parse the xlsx file data
2. ```jest``` - this package is used to create & run unit test
3. ```node-localstorage``` - this package is used to store data in localStorage