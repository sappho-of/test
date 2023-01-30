led.plot(0, 0)
while (input.buttonIsPressed(Button.A)) {
    led.plot(1, 1)
}
basic.forever(function () {
    music.playMelody("C5 B A E D F G C ", 150)
})
