#!/bin/bash
# Ensure Python is available
echo "Setting up Python environment..."
which python3 || (echo "Python3 not found, installing..." && apt-get update && apt-get install -y python3 python3-pip)
which pip3 || (echo "Pip3 not found, installing..." && apt-get update && apt-get install -y python3-pip)

# Install requirements
echo "Installing Python dependencies..."
pip3 install --upgrade pip
pip3 install -r requirements.txt
