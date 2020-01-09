import RPi.GPIO as GPIO # Import Raspberry Pi GPIO library
import requests
def button_callback(channel):
    #When button is clicked... Send GET request to server with parameter set to TRUE
    #Used friend server to host api
    url = 'http://www.ahmedbekhit.com/jonCamera/update?takePicture=true'
    r = requests.post(url)
    print("Button was pushed! And request sent")
GPIO.setwarnings(False) # Ignore warning for now
GPIO.setmode(GPIO.BOARD) # Use physical pin numbering
GPIO.setup(10, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) # Set pin 10 to be an input pin and set initial value to be pulled low (off)
GPIO.add_event_detect(10,GPIO.RISING,callback=button_callback) # Setup event on pin 10 rising edge
message = input("Press enter to quit\n\n") # Run until someone presses enter
GPIO.cleanup() # Clean up