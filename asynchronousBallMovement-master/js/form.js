class Form{
    constructor(){}
    display(){
        var title=createElement('H2')
        title.html("CAR RACING GAME")
        title.position(130,0)
        var input=createInput("name")
        input.position(150,150)
        var button=createButton('SUBMIT')
        button.position(250,250)
        var greeting=createElement('H3')

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html(" WELCOME "+name)
            greeting.position(150,150)
        })

    }
}