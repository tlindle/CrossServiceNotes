#!/bin/sh
mkdir secrets
cd secrets
touch serviceNotesBasicAuthSecrets.json
echo '{ "crossChurchPass": "crossPass" }' >> serviceNotesBasicAuthSecrets.json
touch logzSecrets.json
echo '{ "logzApiToken": "logzToken" }' >> logzSecrets.json