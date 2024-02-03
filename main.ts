input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(223)
    basic.showString("A")
})
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(222)
    basic.showString("C")
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(224)
    basic.showString("B")
})
function GitHub () {
    qwiicjoystick.comment("elssner/cb2-joystick255-61")
    qwiicjoystick.comment("makecode.calliope.cc")
    qwiicjoystick.comment("Hardware: v1")
    qwiicjoystick.comment("2 Erweiterungen laden:")
    qwiicjoystick.comment("radio")
    qwiicjoystick.comment("calliope-net/joystick")
}
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
basic.showString("C")
loops.everyInterval(500, function () {
    radio.sendNumber(qwiicjoystick.readJoystick(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20), b2))
})
