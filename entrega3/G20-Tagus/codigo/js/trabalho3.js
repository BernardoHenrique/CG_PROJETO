/*global THREE, requestAnimationFrame, console*/

var renderer, scene, material, geometry, mesh, camera;

var lamp1, lamp2, lamp3, sphere;

var spotLight1, spotLight2, spotLight3, directionalLight;

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
    'Z': {pressed: false, func: z},
    'z': {pressed: false, func: z},
    'X': {pressed: false, func: x},
    'x': {pressed: false, func: x},
    'C': {pressed: false, func: c},
    'c': {pressed: false, func: c},

}

function createDirectionalLight(){
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(45, 100, 0);
    directionalLight.userData = {active: true};

    scene.add( directionalLight );
}

function createSpotLights(){
    'use strict';

    spotLight1 = new THREE.SpotLight( 0xff666f );
    spotLight1.position.set( 70, 70, 70 );
    spotLight1.userData = {active: true};

    scene.add( spotLight1 );

    spotLight2 = new THREE.SpotLight( 0xf5463f );
    spotLight2.position.set( -70, -70, -70 );
    spotLight2.userData = {active: true};
    
    scene.add( spotLight2 );


    spotLight3 = new THREE.SpotLight( 0xf5683f );
    spotLight3.position.set( 30, 30, 30 );
    spotLight3.userData = {active: true};
    
    scene.add( spotLight3 );
}

function createLamps(x, y, z){
    'use strict';

    lamp1 = new THREE.Object3D();
    lamp2 = new THREE.Object3D();
    lamp3 = new THREE.Object3D();

    geometry = new THREE.ConeGeometry(15, 30, 60, 1, false, 0, 7);

    material = new THREE.MeshBasicMaterial({color: 0xff34f3});

    mesh = new THREE.Mesh(geometry, material); 
    lamp1.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp2.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp3.add(mesh);

    lamp1.position.set(70, 70, 70);
    lamp2.position.set(-70, -70, -70);
    lamp3.position.set(30, 30, 30);

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

    material = new THREE.MeshBasicMaterial({color: 0x3146ff});

    mesh = new THREE.Mesh(geometry, material);

    sphere.position.set(0, -15, 0);
    sphere.add(mesh);

    obj.add(sphere)
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    createLamps(10, 10, 10);
    createSpotLights();
    createDirectionalLight();
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 45 ;
    camera.position.y = 45 ;
    camera.position.z = 300;
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
        controller[e.key].pressed = true;
    })

    window.addEventListener("keyup", (e) => {
        controller[e.key].pressed = false;
    })

    window.addEventListener("resize", onResize);
}

function animate() {
    
    if (controller["3"].pressed){
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.x = tableArticulated.userData.x;
        camera.position.y = tableArticulated.userData.y + 5;
        if (tableArticulated.userData.z >= 0){
            camera.position.z = tableArticulated.userData.z + 5;
        }
        else{
            camera.position.z = tableArticulated.userData.z - 5;
        }
        
        camera.lookAt(tableArticulated.position);
    }

    render();
    
    requestAnimationFrame(animate);

}


function three(){

}

function two(){

}

function one(){
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 300 ;
    camera.position.y = 300 ;
    camera.position.z = 300;
    camera.lookAt(scene.position);
}

function q(){

}

function w(){

}

function e(){

}

function r(){

}

function t(){

}

function y(){

}

function a(){

}

function s(){

}

function z(){

}

function x(){

}

function c(){

}