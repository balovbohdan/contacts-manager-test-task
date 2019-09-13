#!/usr/bin/env bash

chmod +x ./install-modules.sh ./start-client.sh ./start-server.sh
./install-modules.sh
./start-server.sh | ./start-client.sh