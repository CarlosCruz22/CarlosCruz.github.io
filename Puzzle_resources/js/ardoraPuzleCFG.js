//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=40; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
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
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades terminastes el Rompecabezas"; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="Puzzle_resources/media/original.jpg";
var board=[["Puzzle_resources/media/cGllY2UxXzE.jpg","Puzzle_resources/media/cGllY2UyXzE.jpg","Puzzle_resources/media/cGllY2UzXzE.jpg","Puzzle_resources/media/cGllY2U0XzE.jpg","Puzzle_resources/media/cGllY2U1XzE.jpg","Puzzle_resources/media/cGllY2U2XzE.jpg","Puzzle_resources/media/cGllY2U3XzE.jpg","Puzzle_resources/media/cGllY2U4XzE.jpg"],["Puzzle_resources/media/cGllY2UxXzI.jpg","Puzzle_resources/media/cGllY2UyXzI.jpg","Puzzle_resources/media/cGllY2UzXzI.jpg","Puzzle_resources/media/cGllY2U0XzI.jpg","Puzzle_resources/media/cGllY2U1XzI.jpg","Puzzle_resources/media/cGllY2U2XzI.jpg","Puzzle_resources/media/cGllY2U3XzI.jpg","Puzzle_resources/media/cGllY2U4XzI.jpg"],["Puzzle_resources/media/cGllY2UxXzM.jpg","Puzzle_resources/media/cGllY2UyXzM.jpg","Puzzle_resources/media/cGllY2UzXzM.jpg","Puzzle_resources/media/cGllY2U0XzM.jpg","Puzzle_resources/media/cGllY2U1XzM.jpg","Puzzle_resources/media/cGllY2U2XzM.jpg","Puzzle_resources/media/cGllY2U3XzM.jpg","Puzzle_resources/media/cGllY2U4XzM.jpg"],["Puzzle_resources/media/cGllY2UxXzQ.jpg","Puzzle_resources/media/cGllY2UyXzQ.jpg","Puzzle_resources/media/cGllY2UzXzQ.jpg","Puzzle_resources/media/cGllY2U0XzQ.jpg","Puzzle_resources/media/cGllY2U1XzQ.jpg","Puzzle_resources/media/cGllY2U2XzQ.jpg","Puzzle_resources/media/cGllY2U3XzQ.jpg","Puzzle_resources/media/cGllY2U4XzQ.jpg"],["Puzzle_resources/media/cGllY2UxXzU.jpg","Puzzle_resources/media/cGllY2UyXzU.jpg","Puzzle_resources/media/cGllY2UzXzU.jpg","Puzzle_resources/media/cGllY2U0XzU.jpg","Puzzle_resources/media/cGllY2U1XzU.jpg","Puzzle_resources/media/cGllY2U2XzU.jpg","Puzzle_resources/media/cGllY2U3XzU.jpg","Puzzle_resources/media/cGllY2U4XzU.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UHV6emxl"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
