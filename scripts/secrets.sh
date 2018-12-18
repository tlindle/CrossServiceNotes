#!/bin/sh
mkdir secrets
cd secrets
touch cc-orchestration-secrets.json
echo '{
  "crossChurchPass": "crossPass",
  "logzApiToken": "logzToken"
}' >> cc-orchestration-secrets.json