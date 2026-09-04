const byte numChars = 32;
char commandString[numChars]; // an array to store the received data
String newString;
boolean newData = false;

int armed;
int launch;

void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  // digitalWrite(3,LOW);
  Serial.println("<Arduino is ready>");
  digitalWrite(4, HIGH);   //digitally turns LED on after the startup process is complete and ready for messages
}

void loop() {
 recvWithEndMarker();
 showNewData();
 parseCommand();
 executeCommand();
}

void recvWithEndMarker() {
  char data;
  static byte index = 0;
  char endMarker = '\n';
  
  while(Serial.available() > 0 && newData == false) {
    data = Serial.read();
    
    if(data == endMarker){
      commandString[index] = '\0';
      index = 0;
      newData = true;
    } else {
      commandString[index] = data;
      index++;
      if (index >= numChars) {
        index = numChars - 1;
      }
    }
  }
}

void parseCommand() {
  newString = commandString;
  armed = newString.substring(0,1).toInt();  //Armed is the first digit of the message
  launch = newString.substring(1,2).toInt();  //Launch is the second digit of the message
}

void executeCommand() {
  if(armed == 1) {
    digitalWrite(3, HIGH);  //if armed is a 1, the device will be armed
  } else {
    digitalWrite(3,LOW);
  }
  if(armed == 1 && launch == 1){
    digitalWrite(2, HIGH);  //if launch is a 1, the device will fire
    delay(1000);
    digitalWrite(2, LOW);
  }
}

void showNewData() {
  if(newData == true) {
    Serial.print("commandString: ");
    Serial.println(commandString);
    newData = false;
  }
}