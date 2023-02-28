#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
bundle lock --add-platform x86_64-linux
rails db:migrate
rails db:seed #if needed