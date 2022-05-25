/*global THREE, requestAnimationFrame, console*/
/*
import * as THREE from 'three';
import earth from '../js/Terra.png';
*/
var torus1, torus2, torus3, World;

var renderer, scene, material, geometry, mesh, camera, mesh2, mesh3, mesh4, mesh5, mesh6;

var tableArticulated, coneArticulated, sphereArticulated, obj2, obj3, obj4, obj5, obj6;

var capsules;

var trash1, trash2, trash3, trash4, trash5, trash6, trash7, trash8, trash9, trash10, trash11, trash12, trash13, trash14;

var trash15, trash16, trash17, trash18, trash19, trash20;

var controller = {
    'ArrowLeft': {pressed: false, func: moveLeft},
    'ArrowUp': {pressed: false, func: moveUp},
    'ArrowRight': {pressed: false, func: moveRight},
    'ArrowDown': {pressed: false, func: moveDown},
    '1': {pressed: false, func: one},
    '2': {pressed: false, func: two},
    '3': {pressed: false, func: three},

}

function addTrash(x, y, z){

    trash1 = new THREE.Object3D();
    trash1.userData = { jumping: false, step: 0 };

    trash2 = new THREE.Object3D();
    trash2.userData = { jumping: false, step: 0 };

    trash3 = new THREE.Object3D();
    trash3.userData = { jumping: false, step: 0 };

    trash4 = new THREE.Object3D();
    trash4.userData = { jumping: false, step: 0 };

    trash5 = new THREE.Object3D();
    trash5.userData = { jumping: false, step: 0 };

    trash6 = new THREE.Object3D();
    trash6.userData = { jumping: false, step: 0 };

    trash7 = new THREE.Object3D();
    trash7.userData = { jumping: false, step: 0 };

    trash8 = new THREE.Object3D();
    trash8.userData = { jumping: false, step: 0 };

    trash9 = new THREE.Object3D();
    trash9.userData = { jumping: false, step: 0 };

    trash10 = new THREE.Object3D();
    trash10.userData = { jumping: false, step: 0 };

    trash11 = new THREE.Object3D();
    trash11.userData = { jumping: false, step: 0 };

    trash12 = new THREE.Object3D();
    trash12.userData = { jumping: false, step: 0 };

    trash13 = new THREE.Object3D();
    trash13.userData = { jumping: false, step: 0 };

    trash14 = new THREE.Object3D();
    trash14.userData = { jumping: false, step: 0 };

    trash15 = new THREE.Object3D();
    trash15.userData = { jumping: false, step: 0 };

    trash16 = new THREE.Object3D();
    trash16.userData = { jumping: false, step: 0 };

    trash17 = new THREE.Object3D();
    trash17.userData = { jumping: false, step: 0 };

    trash18 = new THREE.Object3D();
    trash18.userData = { jumping: false, step: 0 };

    trash19 = new THREE.Object3D();
    trash19.userData = { jumping: false, step: 0 };

    trash20 = new THREE.Object3D();
    trash20.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(3, 3, 3);
    mesh = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.ConeGeometry(2, 3, 64);
    mesh2 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(1, 3, 1);
    mesh3 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 10, 10);
    mesh4 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.TorusGeometry(3 ,3 , 30, 30);
    mesh5 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 1, 2);
    mesh6 = new THREE.Mesh(geometry, material);

    trash1.add(mesh);
    trash1.position.set(x, 1.2 * 70, z);

    trash2.add(mesh2);
    trash2.position.set(x, -1.2 * 70, z);

    trash3.add(mesh3);
    trash3.position.set(-1.2 * 70, y, z);

    trash4.add(mesh4);
    trash4.position.set(- 1.2 * 70, 1.2 * 70, z);

    trash5.add(mesh5);
    trash5.position.set(1.2 * 70, -1.2 * 70, z);

    trash6.add(mesh6);
    trash6.position.set(-1.2 * 70, -1.2 * 70, z);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(3, 3, 3);
    mesh = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.ConeGeometry(2, 3, 64);
    mesh2 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(1, 3, 1);
    mesh3 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 10, 10);
    mesh4 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.TorusGeometry(3 ,3 , 30, 30);
    mesh5 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 1, 2);
    mesh6 = new THREE.Mesh(geometry, material);

    trash7.add(mesh);
    trash7.position.set(1.2 * 70, y, z);

    trash8.add(mesh2);
    trash8.position.set(x, 1.2 * 70, z);

    trash9.add(mesh3);
    trash9.position.set(x, 1.2 * 70, z);

    trash10.add(mesh4);
    trash10.position.set(x, 1.2 * 70, z);

    trash11.add(mesh5);
    trash11.position.set(x, 1.2 * 70, z);

    trash12.add(mesh6);
    trash12.position.set(x, 1.2 * 70, z);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(3, 3, 3);
    mesh = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.ConeGeometry(2, 3, 64);
    mesh2 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(1, 3, 1);
    mesh3 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 10, 10);
    mesh4 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.TorusGeometry(3 ,3 , 30, 30);
    mesh5 = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.SphereGeometry(3, 1, 2);
    mesh6 = new THREE.Mesh(geometry, material);

    trash13.add(mesh);
    trash13.position.set(x, 1.2 * 70, z);
    
    trash14.add(mesh2);
    trash14.position.set(x, 1.2 * 70, z);
    
    trash15.add(mesh3);
    trash15.position.set(x, 1.2 * 70, z);
    
    trash16.add(mesh4);
    trash16.position.set(x, 1.2 * 70, z);
    
    trash17.add(mesh5);
    trash17.position.set(x, 1.2 * 70, z);
    
    trash18.add(mesh6);
    trash18.position.set(x, 1.2 * 70, z);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(3, 3, 3);
    mesh = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.ConeGeometry(2, 3, 64);
    mesh2 = new THREE.Mesh(geometry, material);
    
    trash19.add(mesh);
    trash19.position.set(x, 1.2 * 70, z);
    
    trash20.add(mesh2);
    trash20.position.set(x, 1.2 * 70, z);

    scene.add(trash1);
    scene.add(trash2);
    scene.add(trash3);
    scene.add(trash4);
    scene.add(trash5);
    scene.add(trash6);
    scene.add(trash7);
    scene.add(trash8);
    scene.add(trash9);
    scene.add(trash10);
    scene.add(trash11);
    scene.add(trash12);
    scene.add(trash13);
    scene.add(trash14);
    scene.add(trash15);
    scene.add(trash16);
    scene.add(trash17);
    scene.add(trash18);
    scene.add(trash19);
    scene.add(trash20);

}

function createGrandParent(x, y, z){
    'use strict';

    tableArticulated = new THREE.Object3D();
    tableArticulated.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xffff19, wireframe: false});
    geometry = new THREE.CylinderGeometry(1, 1, 4.5, 64, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    tableArticulated.add(mesh);
    tableArticulated.position.set(1.2 * 70, y, x);

    createFather(tableArticulated, x, y, z);
    
    scene.add(tableArticulated);
}

function createFather(obj, x, y, z){
    'use strict';

    coneArticulated = new THREE.Object3D();
    coneArticulated.userData = { jumping: false, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xffff90, wireframe: false});
    geometry = new THREE.CylinderGeometry(0, 1, 2.49, 64, 1);
    obj2 = new THREE.Mesh(geometry, material);
    obj2.position.set(0, 3.6, 0);

    coneArticulated.add(obj2);

    createChild(coneArticulated, x, y, z);
    
    obj.add(coneArticulated);
}

function createChild(obj, x, y, z){
    'use strict';

    capsules = new THREE.Object3D();
    capsules.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false});
    geometry = new THREE.SphereGeometry(1, 8, 32, 52);
    obj3 = new THREE.Mesh(geometry, material);
    obj3.position.set(-3, -3, 0);
    obj4 = new THREE.Mesh(geometry, material);
    obj4.position.set(3, -3, 0);
    obj5 = new THREE.Mesh(geometry, material);
    obj5.position.set(0, -3, -3);
    obj6 = new THREE.Mesh(geometry, material);
    obj6.position.set(0, -3, 3);

    capsules.add(obj3);
    capsules.add(obj4);
    capsules.add(obj5);
    capsules.add(obj6);
    
    obj.add(capsules);
}


function createWorld(x, y, z) {
    'use strict';
    
    World = new THREE.Object3D();
    World.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xff19ff, wireframe: false });

    geometry = new THREE.SphereGeometry(70, 10, 10);
    mesh = new THREE.Mesh(geometry, material);

    World.add(mesh);
    World.position.set(x, y, z);
    
    scene.add(World);
}

function createWorld(x, y, z) {
    'use strict';
    
    World = new THREE.Object3D();
    World.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xff19ff, wireframe: false });

    geometry = new THREE.SphereGeometry(70, 30, 30);
    mesh = new THREE.Mesh(geometry, material);

    World.add(mesh);
    World.position.set(x, y, z);
    
    scene.add(World);
}


function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    createWorld(0, 0, 0);

    createGrandParent(0, 0, 0);

    addTrash(0, 0, 0);
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 100 ;
    camera.position.y = 100 ;
    camera.position.z = 400;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCamera();
    
    render();
    
    window.addEventListener("keydown", (e) => {
        controller[e.key].pressed = true;
    })

    window.addEventListener("keyup", (e) => {
        controller[e.key].pressed = false;
    })

    window.addEventListener("resize", onResize);
}

function animate() {

    for(e in controller){
        if (controller[e].pressed){
            controller[e].func();
        }
    }

    render();
    
    requestAnimationFrame(animate);
}

function moveLeft(){
    tableArticulated.position.x -= 1;
}
function moveUp(){
    tableArticulated.position.y += 1;
}
function moveRight(){
    tableArticulated.position.x += 1;
}
function moveDown(){
    tableArticulated.position.y -= 1;
}

function three(){
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.x = -10;
    camera.position.y = -10;
    camera.position.z = -10;
    camera.lookAt(tableArticulated.position);
}

function two(){
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 200;
    camera.position.y = 200;
    camera.position.z = 200;
    camera.lookAt(scene.position);
}

function one(){
    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight
     / - 2, 1, 1000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 200;
    camera.lookAt(scene.position);
}
