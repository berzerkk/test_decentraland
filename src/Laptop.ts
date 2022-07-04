import * as ui from '@dcl/ui-scene-utils'

export class Laptop {
    public entity: Entity
    constructor(public position: Vector3 = new Vector3(0, 0, 0), private modelName: string = 'Laptop.glb') {
        this.modelName = modelName
        this.entity = new Entity()
        this.entity.addComponent(new GLTFShape('models/' + this.modelName))
        this.entity.addComponent(new Transform({position, scale: new Vector3(10, 10, 10)}))
        this.entity.addComponent(new OnPointerDown(() => {this.popupConversion()}))
    }
    popupConversion () {
        executeTask(async () => {
            try {
              let response = await fetch('https://api.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=a920e2c34a9546afa4364d9d000e7a8e')
              let json = await response.json()
              let prompt = new ui.OkPrompt(
                json['USD_EUR'] || '',
                () => {}, 'Ok', true)
            } catch {
              log('failed to reach URL')
            }
          })
    }
}