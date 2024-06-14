#!/bin/bash

echo "Running Backend app scrapping and Front end"

# Executa o backend
cd backend
source env/bin/activate
cd app
uvicorn main:app --reload &
BACKEND_PID=$!

# Executa o frontend

cd ../../frontend/
npm start &
FRONTEND_PID=$!

# Function to kill both processes
cleanup() {
    echo "Terminating both processes..."
    kill $BACKEND_PID $FRONTEND_PID
}

# Trap function to CTRL + C
trap cleanup EXIT SIGINT SIGTERM  

wait $FRONTEND_PID $BACKEND_PID 
