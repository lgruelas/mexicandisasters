#!/bin/bash

source dbconfig.sh

echo "Creating database..."
mysql -u $db_user -p$db_password -e "CREATE DATABASE IF NOT EXISTS desastres"

echo "Creating user..."
mysql -u $db_user -p$db_password -e "CREATE USER 'db_consultant'@'localhost' IDENTIFIED BY '$usr_password';"
mysql -u $db_user -p$db_password -e "GRANT SELECT ON dedastres.* TO ‘db_consultant’@'localhost’;FLUSH PRIVILEGES;"

echo "Restoring database data..." 
mysql -u $db_user -p$db_password desastres < respaldo.sql

echo "Ready to use"
