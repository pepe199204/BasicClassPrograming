int yellow = 13;
int red = 7; 
int miliseconds = 1000;

void setup() {
  // put your setup code here, to run once:
  pinMode(yellow,OUTPUT);
  pinMode(red,OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(yellow, HIGH);
  digitalWrite(red, LOW);
  delay(miliseconds);
  digitalWrite(yellow, LOW);
  digitalWrite(red, HIGH);
  delay(miliseconds * 2);
}
