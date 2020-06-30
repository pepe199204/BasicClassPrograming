/*void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}*/
//port 13 in arduino
int yellow = 13;
//port 7 in arduino
int red = 7;
int miliseconds = 300;

void setup(){
	
  pinMode(yellow, OUTPUT);
  pinMode(red, OUTPUT);
  
}

void loop(){
  digitalWrite(yellow,HIGH);
  digitalWrite(red,LOW);
  delay(miliseconds);
  digitalWrite(yellow,LOW);
  digitalWrite(red,HIGH);
  delay(miliseconds * 2);
}