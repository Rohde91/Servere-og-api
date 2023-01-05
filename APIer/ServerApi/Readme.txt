Denne API ServerApi har til opgave at hente og sende data til data i mappen db.json.

For at starte API'en:

1) Start først json-serveren i en terminal:
npx json-server --watch data/db.json --port 8000

2) Start API'en i en ny terminal:
node app

3) Hent klient-applikationen Client, og start index.html filen i en live-server.