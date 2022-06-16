/*global THREE, requestAnimationFrame, console*/

function setZe(VRButton0){
    VRButton = VRButton0;
}

let vr = false;

var renderer, scene, material, geometry, mesh, camera;

var lamp1, lamp2, lamp3, sphere, box;

var spotLight1, spotLight2, spotLight3, directionalLight;

let texture;

var palanque, smallPalanque;

let origami1, origami2, origami3;

var triangle, vertices, uv;

var typeBPL = 0, typePL = 0;

var pause = 0

var text2 = document.createElement('div');

var helper;

var stepOrigami1 = 0, stepOrigami2 = 0, stepOrigami3 = 0;

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

}

function createOrigami1(){

    origami1 = new THREE.Object3D();

    vertices = new Float32Array( [
        0, -170, 0,
    
        0, -110, 0,

        -30, -140, 2
    ] );

    uv = new Float32Array( [
        0,0,
    
        1,1,

        0,1
    ] );

    createTriangle(origami1, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        0, -170, 0,
    
        0, -110, 0,

        30, -140, 2
    ] );

    uv = new Float32Array( [
        0,0,
    
        1,1,

        1,0
    ] );

    createTriangle(origami1, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -30, -140, 2,
    
        0, -110, 0,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        0,1,
    
        1,1,

        0,0
    ] );

    createTriangle(origami1, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        30, -140, 2,
    
        0, -110, 0,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        1,0,
    
        1,1,

        0,0
    ] );

    createTriangle(origami1, vertices, 0x76ff54, uv);

    origami1.position.set(-60, 100, 70);
    scene.add(origami1);
}

function createOrigami2(){

    origami2 = new THREE.Object3D();

    vertices = new Float32Array( [
        0, -170, 0,
    
        -10, -138, 0,

        0, -138, -2
    ] );

    uv = new Float32Array( [
        0,0.5,
    
        1,1,

        1,0.5
    ] );

    createTriangle(origami2, vertices, 0x8800FF, uv);

    vertices = new Float32Array( [
        0, -138, -2,
    
        -10, -138, 0,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        1,0.5,
    
        1,1,

        0,0.5
    ] );

    createTriangle(origami2, vertices, 0x8800FF, uv);

    vertices = new Float32Array( [
        0, -170, 0,
    
        10, -138, 0,

        0, -138, -2
    ] );

    uv = new Float32Array( [
        0,0.5,
    
        1,0,

        1,0.5
    ] );

    createTriangle(origami2, vertices, 0x8800FF, uv);

    vertices = new Float32Array( [
        0, -138, -2,
    
        10, -138, 0,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        1,0.5,
    
        1,0,

        0,0.5
    ] );

    createTriangle(origami2, vertices, 0x8800FF, uv);

    vertices = new Float32Array( [
        0, -110, 0,
    
        0, -170, 0,

        -15, -122, 0
    ] );

    uv = new Float32Array( [
        1,0.5,
    
        0, 0.5,

        0.75, 1
    ] );

    createTriangle(origami2, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        -15, -122, 0,
    
        0, -170, 0,

        0, -110, 0
    ] );

    uv = new Float32Array( [
        0.75, 1,
    
        0, 0.5,

        1, 0.5
    ] );

    createTriangle(origami2, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        0, -110, 0,
    
        0, -170, 0,

        15, -122, 0
    ] );

    uv = new Float32Array( [
        1,0.5,
    
        0, 0.5,

        0.75, 0
    ] );

    createTriangle(origami2, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        15, -122, 0,
    
        0, -170, 0,

        0, -110, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,
    
        0, 0.5,

        1, 0.5
    ] );



    createTriangle(origami2, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        0, -130, 2,
    
        -10, -138, 0,

        -15, -122, 0
    ] );

    uv = new Float32Array( [
        0.7, 0.5,

        0.65, 0.8,
    
        0.75,1
    ] );

    createTriangle(origami2, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -15, -122, 0,
    
        -10, -138, 0,

        0, -130, 2
    ] );

    uv = new Float32Array( [
        0.75,1,

        0.65, 0.8,
    
        0.7, 0.5
    ] );

    createTriangle(origami2, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        0, -130, 2,
    
        10, -138, 0,

        15, -122, 0
    ] );

    uv = new Float32Array( [
        0.7, 0.5,

        0.65, 0.2,
    
        0.75,0
    ] );

    createTriangle(origami2, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        15, -122, 0,
    
        10, -138, 0,

        0, -130, 2
    ] );

    uv = new Float32Array( [
        0.75,0,

        0.65, 0.2,
    
        0.7, 0.5
    ] );

    createTriangle(origami2, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        0, -170, 0,
    
        0, -130, 2,

        10, -138, 0
    ] );

    uv = new Float32Array( [
        0, 0.5,

        1,0.5,

        0.75, 0
    ] );

    createTriangle(origami2, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        10, -138, 0,
    
        0, -130, 2,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,

        1, 0.5,
    
        0, 0.5
    ] );

    createTriangle(origami2, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        0, -170, 0,
    
        0, -130, 2,

        -10, -138, 0,
    ] );

    uv = new Float32Array( [
        0, 0.5,

        1,0.5,

        0.75, 1
    ] );

    createTriangle(origami2, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -10, -138, 0,
    
        0, -130, 2,

        0, -170, 0
    ] );

    uv = new Float32Array( [
        0.75, 1,

        1, 0.5,
    
        0, 0.5
    ] );

    createTriangle(origami2, vertices, 0xFF0000, uv);

    origami2.position.set(10, 100, 70);
    scene.add(origami2);
}

function createOrigami3(){

    origami3 = new THREE.Object3D();

    vertices = new Float32Array( [
        12, -170, -5,
    
        15, -155, 0,

        5, -155, 0
    ] );

    uv = new Float32Array( [
        0.15, 0,

        0, 0.4,
    
        0.3, 0.35
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        12, -170, 5,
    
        15, -155, 0,

        5, -155, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    uv = new Float32Array( [
        0.15, 0,

        0, 0.4,
    
        0.3, 0.35
    ] );

    vertices = new Float32Array( [
        5, -155, 0,
    
        15, -155, 0,

        12, -170, 5
    ] );

    uv = new Float32Array( [
        0.3,0.35,

        0, 0.4,
    
        0.15, 0,
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        5, -155, 0,
    
        15, -155, 0,

        12, -170, -5
    ] );

    uv = new Float32Array( [
        0.3,0.35,

        0, 0.4,
    
        0.15, 0,
    ] );

    //------------------------------------------------------------------------------

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        12, -170, 5,
    
        5, -170, 5,

        5, -155, 0
    ] );

    uv = new Float32Array( [
        0.15, 0,

        0.35, 0,
    
        0.3, 0.35
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        5, -155, 0,
    
        5, -170, 5,

        12, -170, 5
    ] );

    uv = new Float32Array( [
        0.3, 0.35,

        0.15, 0,

        0.35, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        12, -170, -5,
    
        5, -170, -5,

        5, -155, 0
    ] );

    uv = new Float32Array( [
        0.15, 0,

        0.35, 0,
    
        0.3, 0.35
    ] );


    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        5, -155, 0,
    
        5, -170, -5,

        12, -170, -5
    ] );

    uv = new Float32Array( [
        0.3, 0.35,

        0.15, 0,

        0.35, 0
    ] );
        //------------------------------------------------------------------------------

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        5, -170, 5,
    
        5, -155, 0,

        -7, -170, 5
    ] );

    uv = new Float32Array( [
        0.35, 0,

        0.35, 0.35,
    
        0.75, 0
    ] );


    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -7, -170, 5,
    
        5, -155, 0,

        5, -170, 5
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.35, 0.35,
    
        0.35, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        5, -170, -5,
    
        5, -155, 0,

        -7, -170, -5
    ] );

    uv = new Float32Array( [
        0.35, 0,

        0.35, 0.35,
    
        0.75, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -7, -170, -5,
    
        5, -155, 0,

        5, -170, -5
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.35, 0.35,
    
        0.35, 0
    ] );
        //------------------------------------------------------------------------------

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        5, -155, 0,
    
        -7, -170, 5,

        -7, -155, 0
    ] );

    uv = new Float32Array( [
        0.3, 0.35,

        0.75, 0,
    
        0.75, 0.3
    ] );

    createTriangle(origami3, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        -7, -155, 0,
    
        -7, -170, 5,

        5, -155, 0
    ] );

    uv = new Float32Array( [
        0.75, 0.3,

        0.75, 0,

        0.3, 0.35
    ] );

    createTriangle(origami3, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        5, -155, 0,
    
        -7, -170, -5,

        -7, -155, 0
    ] );

    uv = new Float32Array( [
        0.3, 0.35,

        0.75, 0,
    
        0.75, 0.3
    ] );

    createTriangle(origami3, vertices, 0x0000FF, uv);

    vertices = new Float32Array( [
        -7, -155, 0,
    
        -7, -170, -5,

        5, -155, 0
    ] );

    uv = new Float32Array( [
        0.75, 0.3,

        0.75, 0,

        0.3, 0.35
    ] );

        //------------------------------------------------------------------------------
    createTriangle(origami3, vertices, 0x0000FF, uv);


    vertices = new Float32Array( [
        -7, -170, 5,
    
        -7, -155, 3,

        -15, -155, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.75, 0.3,

        0.85, 0.3
    ] );


    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -15, -155, 0,
    
        -7, -155, 3,

        -7, -170, 5
    ] );

    uv = new Float32Array( [
        0.85, 0.3,

        0.75, 0,

        0.75, 0.3
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -7, -170, -5,
    
        -7, -155, -3,

        -15, -155, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.75, 0.3,

        0.85, 0.3
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -15, -155, 0,
    
        -7, -155, -3,

        -7, -170, -5
    ] );

    uv = new Float32Array( [
        0.85, 0.3,

        0.75, 0,

        0.75, 0.3
    ] );
        //------------------------------------------------------------------------------

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -7, -155, 3,
    
        -15, -155, 0,

        -11, -120, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.85, 0.3,

        0.85, 0.9
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -11, -120, 0,
    
        -15, -155, 0,

        -7, -155, 3
    ] );

    uv = new Float32Array( [
        0.85, 0.9,

        0.75, 0,

        0.85, 0.3
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -7, -155, -3,
    
        -15, -155, 0,

        -11, -120, 0
    ] );

    uv = new Float32Array( [
        0.75, 0,

        0.85, 0.3,

        0.85, 0.9
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -11, -120, 0,
    
        -15, -155, 0,

        -7, -155, -3
    ] );

    uv = new Float32Array( [
        0.85, 0.9,

        0.75, 0,

        0.85, 0.3
    ] );
        //------------------------------------------------------------------------------

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -7, -155, 1,
    
        -7, -115, 1,

        -11, -120, 0
    ] );

    uv = new Float32Array( [
        0.85, 0.3,

        0.75, 0.95,

        0.85, 0.9
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -11, -120, 0,
    
        -7, -115, 1,

        -7, -155, 1
    ] );

    uv = new Float32Array( [
        0.85, 0.9,

        0.85, 0.3,

        0.75, 0.95
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -7, -155, -1,
    
        -7, -115, -1,

        -11, -120, 0
    ] );

    uv = new Float32Array( [
        0.85, 0.3,

        0.75, 0.95,

        0.85, 0.9
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -11, -120, 0,
    
        -7, -115, -1,

        -7, -155, -1
    ] );

    uv = new Float32Array( [
        0.85, 0.9,

        0.85, 0.3,

        0.75, 0.95
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);
    //------------------------------------------------------------------------------
    vertices = new Float32Array( [
        -7, -115, 1,
    
        -9, -110, 0,

        -15, -123, 0
    ] );

    uv = new Float32Array( [
        0.75, 0.95,

        1, 0.85,

        0.75, 0.95
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -15, -123, 0,
    
        -9, -110, 0,

        -7, -115, 1
    ] );

    uv = new Float32Array( [
        0.75, 0.95,

        0.75, 0.95,

        1, 0.85
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    vertices = new Float32Array( [
        -7, -115, -1,
    
        -9, -110, 0,

        -15, -123, 0
    ] );

    uv = new Float32Array( [
        0.75, 0.95,

        1, 0.85,

        0.75, 0.95
    ] );

    createTriangle(origami3, vertices, 0xFF0000, uv);

    vertices = new Float32Array( [
        -15, -123, 0,
    
        -9, -110, 0,

        -7, -115, -1
    ] );

    uv = new Float32Array( [
        0.75, 0.95,

        0.75, 0.95,

        1, 0.85
    ] );

    createTriangle(origami3, vertices, 0x76ff54, uv);

    origami3.position.set(80, 100, 70);
    scene.add(origami3);
}

function createTriangle(obj, vertices, color, uv){

    geometry = new THREE.BufferGeometry();

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    geometry.computeVertexNormals();

    geometry.setAttribute( 'uv', new THREE.BufferAttribute( uv, 2 ) );

    if (typePL == 0){
        material = new THREE.MeshPhongMaterial( {map: new THREE.TextureLoader().load('texture/textura.jpg') } );
    }
    else{
        material = new THREE.MeshLambertMaterial( {map: new THREE.TextureLoader().load('texture/textura.jpg') } );
    }
    

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, material);

    obj.add(mesh);
}

function createBigPalanque(){
    'use strict';

    palanque = new THREE.Object3D();

    geometry = new THREE.BoxGeometry(300,10,300);

    material = new THREE.MeshPhongMaterial({color: 0x896b49});

    palanque.userData = {color : 0x896b49}

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

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

    smallPalanque.userData = {color : 0x896b49}

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, material);

    smallPalanque.position.set(0, 10, -5);
    smallPalanque.add(mesh);

    obj.add(smallPalanque)
}


function createFloor(){
    box = new THREE.Object3D();

    geometry = new THREE.BoxGeometry(400, 1, 400);

    material = new THREE.MeshPhongMaterial({color: 0x3146ff});

    box.userData = {color : 0x3146ff};

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, material);

    box.position.set(0, -120, -40);
    box.add(mesh);

    scene.add(box);
}

function createDirectionalLight(){
    'use strict';

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(70, 70, 70);

    scene.add( directionalLight);
}

function createSpotLights(){
    'use strict';

    spotLight1 = new THREE.SpotLight(0xff666f, 3, 0, Math.PI/9, 0, 1);
    spotLight1.position.set(-60, 30, 110);
    scene.add(spotLight1);
    spotLight1.target.position.set(-60,20,105);
    scene.add(spotLight1.target);

    spotLight2 = new THREE.SpotLight(0xff666f, 3, 0, Math.PI/9, 0, 1);
    spotLight2.position.set(10, 30, 110);
    scene.add(spotLight2);
    spotLight2.target.position.set(10, 20, 105);
    scene.add(spotLight2.target);


    spotLight3 = new THREE.SpotLight(0xff666f, 3, 0, Math.PI/9, 0, 1);
    spotLight3.position.set(80, 30, 110);
    scene.add(spotLight3);
    spotLight3.target.position.set(80, 20, 105);
    scene.add(spotLight3.target);
}

function createLamps(x, y, z){
    'use strict';

    lamp1 = new THREE.Object3D();
    lamp2 = new THREE.Object3D();
    lamp3 = new THREE.Object3D();

    geometry = new THREE.ConeGeometry(15, 30, 60, 1, false, 0, 7);

    material = new THREE.MeshPhongMaterial({color: 0xff34f3});

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, material); 
    lamp1.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp2.add(mesh);

    mesh = new THREE.Mesh(geometry, material); 
    lamp3.add(mesh);

    lamp1.position.set(-60, 100, 80);
    lamp2.position.set(10, 100, 80);
    lamp3.position.set(80, 100, 80);

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

    material = new THREE.MeshPhongMaterial({color: 0x3146ff});

    sphere.userData = {color : 0x3146ff};

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

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
    camera.position.y = 90 ;
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
    renderer.autoClear = false;
    renderer.clear();
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
    VR();

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


function VR(){
    document.body.appendChild( VRButton.createButton( renderer ) );
    renderer.xr.enabled = true;
    vr = true;
}

function animate() {
    'use strict';

    for (e in controller){
        if (controller[e].pressed){
            controller[e].func();
        }
    }

    render();
    
    if(!vr){
        requestAnimationFrame(animate);
    }
    else{
        renderer.setAnimationLoop( function () {
            animate();
        });
    }

}

function three(){
    'use strict';
    createScene();
    typeBPL = 0;
    typePL = 0;
}

function two(){
    'use strict';
    camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
    camera.position.x = 0;
    camera.position.y = -100;
    camera.position.z = 200;
    camera.zoom = 1.35;
    camera.updateProjectionMatrix();
    camera.lookAt(palanque.position);
}

function one(){
    'use strict';
    createCamera();
}

function q(){
    'use strict';
    if(pause == 0){
       origami1.rotateY(0.04);
       stepOrigami1 += 0.04; 
    }
        

}

function w(){
    'use strict';
    if(pause == 0){
       origami1.rotateY(-0.04); 
       stepOrigami1 -= 0.04;
    }
        

}

function e(){
    'use strict';
    if(pause == 0){
        origami2.rotateY(0.04);
        stepOrigami2 += 0.04;
    }
        

}

function r(){
    'use strict';
    if(pause == 0){
        origami2.rotateY(-0.04);
        stepOrigami2 -= 0.04;
    }
        

}

function t(){
    'use strict';
    if(pause == 0){
        origami3.rotateY(0.04);
        stepOrigami3 += 0.04;
    }
        

}

function y(){
    'use strict';
    if(pause == 0){
       origami3.rotateY(-0.04); 
       stepOrigami3 -= 0.04;
    }
    

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
        case "a":
        case "A":
            if(pause == 0){
                if(typePL == 0){
                    scene.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            node.material = new THREE.MeshLambertMaterial({color: node.material.color});
                            node.material.flatShading = THREE.FlatShading;
                            node.material.flastShading = THREE.SmoothShading;
                            node.geometry.computeVertexNormals();
                        }
                    });
                }
                else{
                    scene.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            if (!node.geometry instanceof THREE.BufferGeometry) {
                                node.material = new THREE.MeshPhongMaterial();
                            }
                            else{
                                node.material = new THREE.MeshPhongMaterial({color: node.material.color});
                            }
                            node.material.flatShading = THREE.FlatShading;
                            node.material.flatShading = THREE.SmoothShading;
                            node.geometry.computeVertexNormals();
                        }
                    });
                }
            }
            
            if(typePL == 1)
                typePL = 0;
            else
                typePL = 1;
                
            scene.remove(origami1);
            scene.remove(origami2);
            scene.remove(origami3);
            createOrigami1();
            createOrigami2();
            createOrigami3();
            break;
        case "s":
        case "S":
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    if(typeBPL == 0){
                        node.material = new THREE.MeshBasicMaterial({color: node.material.color});
                        node = new THREE.Mesh(node.geometry, node.material);
                    }
                    else if(typeBPL == 1 && typePL == 0){
                        if (!node.geometry instanceof THREE.BufferGeometry) {
                            node.material = new THREE.MeshPhongMaterial();
                            node = new THREE.Mesh(node.geometry, node.material);
                        }
                        else{
                            node.material = new THREE.MeshPhongMaterial({color: node.material.color});
                            node = new THREE.Mesh(node.geometry, node.material);
                        }
                    }
                    else if(typeBPL == 1 && typePL == 1){
                        node.material = new THREE.MeshLambertMaterial({color: node.material.color});
                        node = new THREE.Mesh(node.geometry, node.material);
                    }
                    
                }
            });
            
            if(typeBPL == 1)
                typeBPL = 0;
            else
                typeBPL = 1;

            scene.remove(origami1);
            scene.remove(origami2);
            scene.remove(origami3);
            createOrigami1();
            createOrigami2();
            createOrigami3();
            break;
        case " ":
            if(pause == 0){
                pause = 1;

                text2.style.position = 'absolute';
                text2.style.width = 500;
                text2.style.height = 3000;
                text2.style.backgroundColor = "white";
                text2.innerHTML = "                       Estamos em pausa!                     ";
                text2.style.top = 100 + 'px';
                text2.style.left = 400 + 'px';
                document.body.appendChild(text2);

            }
            else{
                document.body.removeChild(text2);
                pause = 0;
            }

            break;
    }
}