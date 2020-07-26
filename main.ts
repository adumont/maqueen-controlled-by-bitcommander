function Left (speed: number) {
    if (speed > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    } else if (speed < 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0 - speed)
    } else {
        maqueen.motorStop(maqueen.Motors.M1)
    }
}
input.onButtonPressed(Button.A, function () {
    serial.writeLine("--")
    serial.writeValue("A", 1)
    serial.writeValue("y", y)
    serial.writeValue("x", x)
    serial.writeValue("sLeft", Math.max(-255, Math.min((y + x) / 2, 255)))
    serial.writeValue("sRight", Math.max(-255, Math.min((y - x) / 2, 255)))
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        if (value >= x0) {
            x = Math.map(value, x0, 1023, 0, 512)
        } else {
            x = Math.map(value, 0, x0, -512, 0)
        }
    } else if (name == "y") {
        if (value >= y0) {
            y = Math.map(value, y0, 1023, 0, 512)
        } else {
            y = Math.map(value, 0, y0, -512, 0)
        }
    } else if (name == "Dial") {
        Dial = Math.map(value, 5, 800, 0, 255)
    } else if (name == "Red") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Dial)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else if (name == "cal_x") {
        x0 = value
        serial.writeValue(name, value)
    } else if (name == "cal_y") {
        y0 = value
        serial.writeValue(name, value)
    } else if (false) {
    	
    } else {
    	
    }
})
function Right (speed: number) {
    if (speed > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    } else if (speed < 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0 - speed)
    } else {
        maqueen.motorStop(maqueen.Motors.M2)
    }
}
let Dial = 0
let x = 0
let y = 0
let y0 = 0
let x0 = 0
x0 = 582
y0 = 568
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
serial.writeLine("Started")
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    Left(Math.max(-255, Math.min((y + x) / 2, 255)))
    Right(Math.max(-255, Math.min((y - x) / 2, 255)))
})
