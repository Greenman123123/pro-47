class Level1 {
    constructor() {
        this.turtle = createSprite(300, 525)
        this.turtle.addImage(turtleImg)
        this.turtle.scale = 0.4

        this.can1 = createSprite(150, 400, 100, 20);
        this.can1.addImage(can1Img)
        this.can1.scale = 0.4
        this.can1.velocity.x = random(-2,2)
        this.can1.velocity.y = random(-2,2)
        

        this.can2 = createSprite(425, 400, 20, 100);
        this.can2.addImage(can2Img)
        this.can2.scale = 0.4
        this.can2.velocity.x = random(-2,2)
        this.can2.velocity.y = random(-2,2)

        this.can3 = createSprite(145, 250, 100, 20);
        this.can3.addImage(can3Img)
        this.can3.scale = 1.4
        this.can3.velocity.x = random(-2,2)
        this.can3.velocity.y = random(-2,2)

        this.can4 = createSprite(425, 150, 20, 100);
        this.can4.addImage(can4Img)
        this.can4.scale = 1.3
        this.can4.velocity.x = random(-2,2)
        this.can4.velocity.y = random(-2,2)

        this.can5 = createSprite(145, 140, 100, 20);
        this.can5.addImage(can5Img)
        this.can5.scale = 0.4
        this.can5.velocity.x = random(-2,2)
        this.can5.velocity.y = random(-2,2)

        this.can6 = createSprite(425, 250, 100, 20);
        this.can6.addImage(can6Img)
        this.can6.velocity.x = random(-2,2)
        this.can6.velocity.y = random(-2,2)

        this.end = createSprite(300, 70, 50, 50)
        this.end.addImage(endImg)
        this.end.scale = 0.3
    }


    movement() {
        if (keyDown("up")) {
            this.turtle.y = this.turtle.y - 3
        }
        if (keyDown("down")) {
            this.turtle.y = this.turtle.y + 3
        }
        if (keyDown("left")) {
            this.turtle.x = this.turtle.x - 3
        }
        if (keyDown("right")) {
            this.turtle.x = this.turtle.x + 3
        }
    }

    display() {

        this.movement()

        if (this.turtle.isTouching(this.end)) {
            gameState = "level2"
        }

        drawSprites()
    }
}