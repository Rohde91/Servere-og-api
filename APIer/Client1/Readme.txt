Denne klient-applikation Client1 henter og sender data fra/til en Api,
der er startet på port 3000.
Det kan være Api'en ServerApi1 eller ServerApiMongoDb1 der er startet.


Data hentes eller sendes til Api'en enten ved:
1) Data indtastes i klienten i en html-form og ved submit aktiveres et endpoint 
i Api'en som kan læse de data der er indtastet i formen på klienten.
2) Data hentes gennem funktioner i code.js som aktiverer endpoints i Api'en. 
Funktioner i code.js kaldes fra html-filerne.