input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (b2 > 1) {
        b2 += -1
        basic.showNumber(b2)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    qwiicjoystick.clearButtonStatus(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (b2 < 9) {
        b2 += 1
        basic.showNumber(b2)
    }
})
let b2 = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(1)
radio.setGroup(222)
qwiicjoystick.beimStart(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20))
b2 = 7
loops.everyInterval(500, function () {
    radio.sendNumber(qwiicjoystick.readJoystick(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20), b2))
})
