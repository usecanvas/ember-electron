ember: ELECTRON_ENV=development ember server -p  5000
electron: $(while ! echo exit | nc localhost 5000; do sleep 1; done) && ELECTRON_ENV=development electron .
