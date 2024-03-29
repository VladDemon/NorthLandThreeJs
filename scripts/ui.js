import {GUI} from 'three/addons/libs/lil-gui.module.min.js'

export default function createUI(world){
    const gui = new GUI()
    gui.add(world.size, 'width', 8, 128, 1).name('Width')
    gui.add(world.size, 'height', 8, 128, 1).name('Height')
    // gui.add(world, 'generate');

    gui.onChange(()=>{
        world.generate()
    })
}