input.onButtonPressed(Button.A, function () {
    serial.writeValue("A", 1)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
