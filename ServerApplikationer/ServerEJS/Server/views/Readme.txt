Denne applikation er en server der har endpoint til at sende html-filer til en klient.
Der anvendes server-side rendering.
Serveren har også endpoints til at sende og hente data til/fra filen db.json.

1) Start først json-serveren i en terminal:
npx json-server --watch data/db.json --port 8000

2) Start API'en i en ny terminal:
node app

3) I en browser skriv localhost/3000



I mappen public ligger de filer som klienten/frontend skal have adgang til.