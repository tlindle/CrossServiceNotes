#!/bin/sh
mkdir secrets
cd secrets
touch cc-api-secrets.json
echo '{
  "crossChurchPass": "crossPass",
  "logzApiToken": "logzToken",
  "mongoUser": "mongoUser",
  "mongoPass": "mongoPass"
}' >> cc-api-secrets.json