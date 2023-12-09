const byte numChars = 32;
char commandString[numChars]; // an array to store the received data
String newString;
boolean newData = false;

int armed;

void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  digitalWrite(3,LOW);
  Serial.println("<Arduino is ready>");
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
  armed = newString.substring(0,1).toInt();
}

void executeCommand() {
  if(armed == 1) {
    digitalWrite(3, HIGH);
  } else {
    digitalWrite(3,LOW);
  }
}

void showNewData() {
  if(newData == true) {
    Serial.print("commandString: ");
    Serial.println(commandString);
    newData = false;
  }
}