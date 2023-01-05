Denne API ServerApi1 har til opgave at hente og sende data til data i mappen db.json.

For at starte API'en:

1) Start først json-serveren i en terminal:
npx json-server --watch data/db.json --port 8000

2) Start API'en i en ny terminal:
node app

3) Hent klient-applikationen Client1, og start index.html filen i en live-server.


Denne API ServerApi1 udfører samme opgave API'en ServerApi, 
som jeg tidligere har udleveret.
Forskellen er at i denne API ServerApi1 har jeg ændret 3 endpoints:
1) app.post('/getBlog',(req, res)  
2) app.post('/createBlog',(req, res)
3) app.post('/slet',(req, res) 
Disse 3 endpoints skal hente data fra en html-form hos klienten, 
og derfor er de lavet til POST.
Derfor skal der benyttes klient-applikationen Client1 til denne ServerApi1.