#!/bin/bash

echo "Running local web scrapper and front end"

# # Exports
# export REDIS_URL="127.0.0.1"
# export NGROK_URL="127.0.0.1"
# export MONGO_CONN_STR="mongodb://127.0.0.1:27017/"

# # Verifica o Redis
# if pgrep redis > /dev/null; then
#     echo "Redis Ok"
# else
#     echo "Redis aren't running. Please, start Redis and try again"
#     exit 1
# fi

# # Start docker
# sudo docker start grafana
# sudo docker start tele-prometheus

# # Verifica o MongoDB
# if pgrep mongod > /dev/null; then
#     echo "MongoDB Ok"
# else
#     echo "MongoDB aren't running. Please, start MongoDB and try again"
#     exit 1
# fi

# Executa o backend
cd backend
source env/bin/activate
cd app
uvicorn main:app --reload &
BACKEND_PID=$!

# Executa o frontend

cd ../../frontend
npm start &
FRONTEND_PID=$!



# Function to kill both processes
cleanup() {
    echo "Terminating both processes..."
    kill $FRONTEND_PID $BACKEND_PID
}

# Trap function to CTRL + C
trap cleanup EXIT SIGINT SIGTERM

wait $FRONTEND_PID $BACKEND_PID
