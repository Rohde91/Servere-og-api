Denne API ServerApiMongoDb1 har til opgave at hente og sende data til data 
til/fra en MongoDb database.

For at starte API'en:

1) Start API'en i en terminal:
node app

2) Hent klient-applikationen Client1, og start index.html filen i en live-server.


Denne API ServerApiMongoDb1 udfører samme opgave API'en ServerApiMongoDb, 
som jeg tidligere har udleveret.
Forskellen er at i denne API ServerApiMongoDb1 har jeg ændret 3 endpoints:
1) app.post('/getBlog',(req, res)  
2) app.post('/createBlog',(req, res)
3) app.post('/slet',(req, res) 
Disse 3 endpoints skal hente data fra en html-form hos klienten, 
og derfor er de lavet til POST.
Derfor skal der benyttes klient-applikationen Client1 til denne ServerApiMongoDb1.