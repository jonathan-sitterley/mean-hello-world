/*==========================================================================

//==========================================================================
*/
int motor1pin1 = 2;
int motor1pin2 = 3;

int motor2pin1 = 4;
int motor2pin2 = 5;
int speed = 150;

const int buttonPin = 2;
const int switchPin = 3;
const int ledPin = 12;
int buttonState = 0;
int switchState = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(motor1pin1, OUTPUT);
  pinMode(motor1pin2, OUTPUT);
  pinMode(motor2pin1, OUTPUT);
  pinMode(motor2pin2, OUTPUT);

  //(Optional)
  pinMode(8, OUTPUT); 
  //pinMode(9, OUTPUT);
  //(Optional)

  pinMode(buttonPin, INPUT);
  pinMode(switchPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {

  // buttonState = digitalRead(buttonPin);
  // if (buttonState == HIGH){
  //   digitalWrite(ledPin, HIGH);
  // } else {
  //   digitalWrite(ledPin, LOW);
  // }

  // switchState = digitalRead(switchPin);
  // if (switchState == HIGH){
  //   digitalWrite(ledPin, HIGH);
  // } else {
  //   digitalWrite(ledPin, LOW);
  // }


   // put your main code here, to run repeatedly:

  // if (speed < 250){
  //   speed = speed +10; 
  // } else {
  //   speed = 0;
  // }

  //Controlling speed (0   = off and 255 = max speed):     
  //(Optional)
  analogWrite(8, 250); //ENA   pin
  //analogWrite(9, 150); //ENB pin
  //(Optional)
  
  // digitalWrite(motor1pin1,   HIGH);
  // digitalWrite(motor1pin2, LOW);

  // //Drives motor at OUT1 and OUT2
  // digitalWrite(motor2pin1, HIGH);
  // digitalWrite(motor2pin2, LOW);
  // delay(50);

  // digitalWrite(motor1pin1,   LOW);
  // digitalWrite(motor1pin2, HIGH);

  //digitalWrite(motor2pin1, LOW);
  //digitalWrite(motor2pin2, HIGH);
  //delay(3000);

  switchState = digitalRead(switchPin);
  buttonState = digitalRead(buttonPin);

  if (buttonState == HIGH){
    if (switchState == HIGH){
      analogWrite(9, 130); //ENA   pin
      digitalWrite(motor2pin1, HIGH);
      digitalWrite(motor2pin2, LOW);
    } else {
      analogWrite(9, 250); //ENA   pin
      digitalWrite(motor2pin1, LOW);
      digitalWrite(motor2pin2, HIGH);
    }
  } else {
    digitalWrite(motor2pin1, LOW);
    digitalWrite(motor2pin2, LOW);
  }
  delay(50);

}
