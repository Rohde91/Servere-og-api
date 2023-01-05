Denne applikation er en server der har endpoint til at sende html-filer til en klient.
Der anvendes klient-side rendering.
Serveren har også endpoints til at sende og hente data til/fra filen db.json.

1) Start først json-serveren i en terminal:
npx json-server --watch data/db.json --port 8000

2) Start API'en i en ny terminal:
node app

3) I en browser skriv localhost/3000


Forskellen på denne server i mappen ClientServet1 og serveren i mappen 
ClientServer er:

Der er ændret 3 endpoints:
1) app.post('/getBlog',(req, res)  
2) app.post('/createBlog',(req, res)
3) app.post('/slet',(req, res) 
Disse 3 endpoints skal hente data fra en html-form hos klienten, 
og derfor er de lavet til POST.
Derfor er der også ændre formene i html-filerne create.html, get.html og del.html.


I mappen public ligger de filer som klienten/frontend skal have adgang til.