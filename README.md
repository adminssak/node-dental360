# Boilerplate API Services

## Docs

https://typegoose.github.io/typegoose/docs/



## Build Steps


### To run locally
npm run start


pid=$(lsof -ti tcp:3000)
if [[ $pid ]]; then
  kill -9 $pid
fi