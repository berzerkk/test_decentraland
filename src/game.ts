import { Laptop } from './Laptop';

const ground = new Entity()
ground.addComponent(new GLTFShape('models/FloorBaseWood_01.glb'))
ground.addComponent(new Transform({position: new Vector3(16, 0, 16), scale: new Vector3(2, 1, 2)}))
engine.addEntity(ground)

const laptop = new Laptop(new Vector3(16, 0, 16));
engine.addEntity(laptop.entity)