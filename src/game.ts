import * as PIXI from "pixi.js"
import supermanImage from "./images/superman.png"
import backgroundImage from "./images/background.png"
import { SUPERMAN } from "./superman"

class supermanGame {
// loader
    public pixi: PIXI.Application
    public loader: PIXI.Loader
    public background = backgroundImage
    public supermans : SUPERMAN [] = []

    constructor() {
        this.pixi = new PIXI.Application({
            width: innerWidth, height: innerHeight})
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("backgroundTexture", backgroundImage)
            .add("supermanTexture", supermanImage)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.pixi.stage.addChild(this.background)

//       for loop for adding sprite
        for(let i = 0; i < 1; i++){
            let superman = new SUPERMAN(this.loader.resources["supermanTexture"].texture!)
            this.pixi.stage.addChild(superman)
            this.supermans.push(superman)
        }


        this.pixi.ticker.add((delta) => this.updateTheStage(delta))
    }

    updateTheStage(delta: number) {

       

        for (let mySuperman of this.supermans){
            mySuperman.update();
        }

    }
}

new supermanGame()
