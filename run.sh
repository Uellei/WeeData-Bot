#!/bin/bash

# Exibe uma mensagem de introdução
echo "Iniciando o backend, o frontend e serviço de proxy..."

install_backend_dependencies() {
    echo "Instalando dependências do backend..."
    cd backend || exit
    python3 -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    cd app || exit
}

# Função para iniciar o backend
start_backend() {
    echo "Iniciando o backend..."
    uvicorn main:app --reload &
    BACKEND_PID=$!
}

# Função para instalar dependências do frontend
install_frontend_dependencies() {
    echo "Instalando dependências do frontend..."
    cd ../../frontend || exit
    npm install
}

# Função para iniciar o frontend
start_frontend() {
    echo "Iniciando o frontend..."
    npm start &
    FRONTEND_PID=$!
}

# Função para iniciar o serviço de proxy
start_proxy() {
    echo "Iniciando o serviço de proxy..."
    cd src/services || exit
    node proxy.js &
    PROXY_PID=$!
}

# Função de limpeza para encerrar processos ao sair
cleanup() {
    echo "Encerrando todos os processos..."
    kill $BACKEND_PID $FRONTEND_PID $PROXY_PID
}

# Configura a função cleanup para ser chamada ao receber sinais de saída
trap cleanup EXIT SIGINT SIGTERM

# Executa as funções
install_backend_dependencies
start_backend
install_frontend_dependencies
start_frontend
start_proxy

# Espera os processos finalizarem
wait $BACKEND_PID $FRONTEND_PID $PROXY_PID