#!/bin/sh

echo "Starting start.sh script..."

# Wait for the database server to be ready
while ! nc -z db 3306; do   
  sleep 1
done

echo "Database server is ready."

# Run the migration
prisma db pull
prisma generate

echo "Migration completed."

node index.js

echo "Express started."