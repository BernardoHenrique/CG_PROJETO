/*global THREE, requestAnimationFrame, console*/

//import { VRButton } from 'CG_PROJETO/entrega3/G20-Tagus/codigo/VR_CONTENT/VR.js';

var renderer, scene, material, geometry, mesh, camera;

var lamp1, lamp2, lamp3, sphere, box;

var spotLight1, spotLight2, spotLight3, directionalLight;

var palanque, smallPalanque;

var origami1, origami2, origami3;

var triangle, vertices;

var helper;

var controller = {
    '1': {pressed: false, func: one},
    '2': {pressed: false, func: two},
    '3': {pressed: false, func: three},
    'Q': {pressed: false, func: q},
    'q': {pressed: false, func: q},
    'W': {pressed: false, func: w},
    'w': {pressed: false, func: w},
    'E': {pressed: false, func: e},
    'e': {pressed: false, func: e},
    'R': {pressed: false, func: r},
    'r': {pressed: false, func: r},
    'T': {pressed: false, func: t},
    't': {pressed: false, func: t},
    'Y': {pressed: false, func: y},
    'y': {pressed: false, func: y},
    'A': {pressed: false, func: a},
    'a': {pressed: false, func: a},
    'S': {pressed: false, func: s},
    's': {pressed: false, func: s},

}

/*function createStereoCamera(){
    'use strict';

    document.body.appendChild( VRButton.createButton( renderer ) );

    renderer.xr.enabled = true;

    renderer.setAnimationLoop( function () {

        renderer.render( scene, camera );
    
    } );
}*/

function createOrigami1(){

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -100, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -40, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

}

function createOrigami2(){

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -100, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -40, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

}

function createOrigami3(){

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -100, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

    vertices = new Float32Array( [
        -70, -50, -10,
    
        -70, 10, -10,

        -40, -20, -20
    ] );

    createTriangle(vertices, 0x76ff54);

}

function createTriangle(vertices, color){

    geometry = new THREE.BufferGeometry();

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    material = new THREE.MeshBasicMaterial( { color: color} );
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
}

function createBigPalanque(){
    'use strict';

    palanque = new THREE.Object3D();

    geometry = new THREE.BoxGeometry(300,10,300);

    material = new THREE.MeshLambertMaterial({color: 0x896b49});

    mesh = new THREE.Mesh(geometry, material); 
    palanque.add(mesh);

    palanque.position.set(0, -100, -40);

    createSmallPalanque(palanque);

    scene.add(palanque);

}

function createSmallPalanque(obj){
    'use strict';

    smallPalanque = new THREE.Object3D();

    geometry = new THREE.BoxGeometry(300, 10, 290);

    material = new THREE.MeshPhongMaterial({color: 0x896b49});

    mesh = new THREE.Mesh(geometry, material);

    smallPalanque.position.set(0, 10, -5);
    smallPalanque.add(mesh);

    /*createStepOne(smallpalanque);
    createStepTwo(smallPalanque);
    createStepThree(smallPalanque);*/

    obj.add(smallPalanque)
}


function createFloor(){
    box = new THREE.Object3D();

    geometry = new THREE.BoxGeometry(400, 1, 400);

    material = new THREE.MeshPhongMaterial({color: 0x3146ff});

    mesh = new THREE.Mesh(geometry, material);

    box.position.set(0, -120, -40);
    box.add(mesh);

    scene.add(box);
}

function createDirectionalLight(){
    'use strict';

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(70, 70, 70);
    //directionalLight.target.position.set(-70, -70, -70);
    
    //directionalLight.visible = false;

    scene.add( directionalLight);
    
    //helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    //scene.add(helper);
    //scene.add(directionalLight.target);
}

function createSpotLights(){
    'use strict';

    spotLight1 = new THREE.SpotLight( 0xff666f );
    spotLight1.position.set(-70, 100, -10);

    scene.add( spotLight1 );
    //helper = new THREE.CameraHelper(spotLight1.shadow.camera);
    //scene.add(helper);

    spotLight2 = new THREE.SpotLight( 0xf5463f );
    spotLight2.position.set(-30, 70, -30);
    
    scene.add( spotLight2 );
    //helper = new THREE.CameraHelper(spotLight2.shadow.camera);
    //scene.add(helper);


    spotLight3 = new THREE.SpotLight( 0xf5683f );
    spotLight3.position.set(130, 70, 30);
    
    scene.add( spotLight3 );
    //helper = new THREE.CameraHelper(spotLight3.shadow.camera);
    //scene.add(helper);
}

function createLamps(x, y, z){
    'use strict';

    lamp1 = new THREE.Object3D();
    lamp2 = new THREE.Object3D();
    lamp3 = new THREE.Object3D();

    geometry = new THREE.ConeGeometry(15, 30, 60, 1, false, 0, 7);

    material = new THREE.MeshPhongMaterial({color: 0xff34f3});

    mesh = new THREE.Mesh(geometry, material); 
    lamp1.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp2.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp3.add(mesh);

    lamp1.position.set(-200, 70, 70);
    lamp2.position.set(-30, 70, -30);
    lamp3.position.set(130, 70, 30);

    createSphere(lamp1);
    createSphere(lamp2);
    createSphere(lamp3);

    scene.add(lamp1);
    scene.add(lamp2);
    scene.add(lamp3);
}

function createSphere(obj){
    'use strict';

    sphere = new THREE.Object3D();

    geometry = new THREE.SphereGeometry(9, 64, 32);

    material = new THREE.MeshLambertMaterial({color: 0x3146ff});

    mesh = new THREE.Mesh(geometry, material);

    sphere.position.set(0, -15, 0);
    sphere.add(mesh);

    obj.add(sphere)
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    createFloor();
    createBigPalanque();
    createLamps(10, 10, 10);
    createSpotLights();
    createDirectionalLight();
    createOrigami1();
    createOrigami2();
    createOrigami3();

}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 45 ;
    camera.position.y = 165 ;
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
    
    window.addEventListener("keydown", (e) => {
        if(e.key in controller)
            controller[e.key].pressed = true;
        else
            window.addEventListener("keydown", onKeyDown);
    })

    window.addEventListener("keyup", (e) => {
        if(e.key in controller)
            controller[e.key].pressed = false;
    })

    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    for (e in controller){
        if (controller[e].pressed){
            controller[e].func();
        }
    }

    render();
    
    requestAnimationFrame(animate);

}


function three(){
    'use strict';

    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = -100 ;
    camera.position.y = 20 ;
    camera.position.z = 30;
    camera.lookAt(scene.position);
}

function two(){
    'use strict';
    
    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
    camera.position.x = 0;
    camera.position.y = -100;
    camera.position.z = 200;
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    camera.lookAt(palanque.position);
}

function one(){
    'use strict';
    createCamera();
}

function q(){
    'use strict';

}

function w(){
    'use strict';

}

function e(){
    'use strict';

}

function r(){
    'use strict';

}

function t(){
    'use strict';

}

function y(){
    'use strict';

}

function a(){
    'use strict';

}

function s(){
    'use strict';

}

function onKeyDown(e) {
    'use strict';
    
    switch (e.key) {
        case "D":
        case "d":
            directionalLight.visible = !directionalLight.visible;
            break;
        case "z":
        case "Z":
            spotLight1.visible = !spotLight1.visible;
            break;
        case "x":
        case "X":
            spotLight2.visible = !spotLight2.visible;
            break;
        case "c":
        case "C":
            spotLight3.visible = !spotLight3.visible;
            break;
    }
}