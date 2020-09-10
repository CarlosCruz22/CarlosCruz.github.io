//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades acertastes todas las respuesta"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["UA","Ug","RQ","Rw","VQ","Tg","VA","QQ","Uw","IA","RA","RQ","IA","Tg","QQ","Ug","VQ","VA","Tw"];
var que=["Es el hijo de 4 Hokage?","Es el hermano Itachi?","El dueño del perro llamado akamaru es?","Pertenece al clan hyuga y entrena a hinata?","Es amigo de chouji y tambien es un gran estratega?"];
var yCell=["TkFSVVRP","U0FTVUtF","S0lCQQ","TkVKSQ","U0hJS0FNQVJV"];
var pos=[["6","8","2","5","7","0"],["9","15","0","17","0","3"],["0","0","0","0"],["14","12","0","0"],["0","0","0","0","0","0","0","16","0"]];
var upos=[["","","","","",""],["","","","","",""],["","","",""],["","","",""],["","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","",""];
var colCount=19;
var showE=false;
var typeD=0;var tiCor=false;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="Q29udHJ1eWU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
