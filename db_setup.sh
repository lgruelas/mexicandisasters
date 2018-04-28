#!/bin/bash

source dbconfig.sh

echo "creating database..."
mysql -u $db_user -p$db_password -e "CREATE DATABASE IF NOT EXISTS desastres"

echo "Restoring database data..." 
mysql -u $db_user -p$db_password desastres < respaldo.sql

echo "Ready to use"
