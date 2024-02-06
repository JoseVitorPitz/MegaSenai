#define tempo 100
int cont = 0;
int randNum;
int randNum2;
int dispPinos[7] = {1,2,3,4,5,6,7};
int dispPinos2[7] = {8,9,10,11,12,13,14};
  int digitos[10][7] = {
    {1,1,1,1,1,1,0},
    {0,1,1,0,0,0,0},
    {1,1,0,1,1,0,1},
    {1,1,1,1,0,0,1},
    {0,1,1,0,0,1,1},
    {1,0,1,1,0,1,1},
    {1,0,1,1,1,1,1},
    {1,1,1,0,0,0,0},
    {1,1,1,1,1,1,1},
    {1,1,1,1,0,1,1}
  };
void setup(){
  pinMode(0, INPUT_PULLUP);
  for(int i = 0; i < 7; i++){
  	pinMode(dispPinos[i], OUTPUT); 
    pinMode(dispPinos2[i], OUTPUT);
  }      
}

void loop(){
  digito(cont);
  delay(tempo);
  cont++;
  if(cont>9){
    cont = 0;
  }
  randNum = random(0, 10);
  randNum2 = random(0, 10);
}

void digito(int d) {
  for(int i = 0; i < 7; i++){
  	digitalWrite(dispPinos[i], digitos[d][i]);  
    digitalWrite(dispPinos2[i], digitos[randNum][i]); 
  }
  fazerSorteio(); 
}

void fazerSorteio(){
  if(digitalRead(0) == LOW) {    
    delay(5000);  
  }
}