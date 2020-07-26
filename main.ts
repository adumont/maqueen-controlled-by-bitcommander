input.onButtonPressed(Button.A, function () {
    serial.writeValue("A", 1)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "Dial") {
        Dial = Math.map(value, 5, 950, 0, 255)
    } else if (name == "Red") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Dial)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
let Dial = 0
let y = 0
let x = 0
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
