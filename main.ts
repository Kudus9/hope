input.onButtonPressed(Button.A, function () {
    basic.showString("If u put your mind to it")
    basic.showString("You can do anything")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Never give up")
})
