import '../style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { World } from './world';
import StatsModule from 'three/examples/jsm/libs/stats.module'
import createUI from './ui';


// stats framerate
const stats = new StatsModule();
document.body.append(stats.dom)

// Rendering
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x80a0e0)
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.set(-32,16,-32);

// Orbit
const orbit = new OrbitControls(camera, renderer.domElement)
orbit.target.set(16,0,16)
orbit.update()

// Scene
const scene = new THREE.Scene();

// World Generetation
const world = new World()
world.generate()
scene.add(world)

// Light
function setupLight() {
    const light1 = new THREE.DirectionalLight();
    light1.position.set(1,1,1);
    scene.add(light1);

    const ambient = new THREE.AmbientLight();
    ambient.intensity = 0.1
    scene.add(ambient)
}

// GameLoopFunc
const animate = () =>{
    requestAnimationFrame(animate)
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    stats.update()
    renderer.render(scene, camera)
    
}

setupLight();
createUI(world);
animate();

// ResizebleWindow
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight)
  })



