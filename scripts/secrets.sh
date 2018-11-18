#!/bin/sh
mkdir secrets
cd secrets
touch serviceNotesBasicAuth.json
echo '{ "crossChurchPass": "crossPass" }' >> serviceNotesBasicAuth.json