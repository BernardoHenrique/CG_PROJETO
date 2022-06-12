/*global THREE, requestAnimationFrame, console*/

//import { VRButton } from 'CG_PROJETO/entrega3/G20-Tagus/codigo/VR_CONTENT/VR.js';
//import image from '../texture/textura.jpeg'

var renderer, scene, material, geometry, mesh, camera;

var lamp1, lamp2, lamp3, sphere, box;

var spotLight1, spotLight2, spotLight3, directionalLight;

let texture;

var palanque, smallPalanque;

let origami1, origami2, origami3;

var triangle, vertices;

var triangle1, triangle2, triangle3, triangle4, triangle5, triangle6, triangle7, triangle8, triangle9, triangle10;
var triangle11, triangle12, triangle13, triangle14, triangle15, triangle16, triangle17, triangle18, triangle19, triangle20;
var triangle21, triangle22, triangle23, triangle24, triangle25, triangle26, triangle27, triangle28, triangle29, triangle30;
var triangle31, triangle32, triangle33, triangle34, triangle35, triangle36, triangle37;

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

/*function createStereoCamera(){
    'use strict';

    document.body.appendChild( VRButton.createButton( renderer ) );

    renderer.xr.enabled = true;

    renderer.setAnimationLoop( function () {

        renderer.render( scene, camera );
    
    } );
}*/

function createOrigami1(obj){

    origami1 = new THREE.Object3D();

    triangle1 = new THREE.Object3D();
    triangle1.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -40, 0,

        -30, -70, 2
    ] );

    createTriangle(origami1, triangle1, vertices, 0xFF0000);

    triangle2 = new THREE.Object3D();
    triangle2.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -40, 0,

        30, -70, 2
    ] );

    createTriangle(origami1, triangle2, vertices, 0x76ff54);

    triangle3 = new THREE.Object3D();
    triangle3.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -30, -70, 2,
    
        0, -40, 0,

        0, -100, 0
    ] );

    createTriangle(origami1, triangle3, vertices, 0xFF0000);

    triangle4 = new THREE.Object3D();
    triangle4.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        30, -70, 2,
    
        0, -40, 0,

        0, -100, 0
    ] );

    createTriangle(origami1, triangle4, vertices, 0x76ff54);

    obj.add(origami1);

}

function createOrigami2(obj){

    origami2 = new THREE.Object3D();

    triangle5 = new THREE.Object3D();
    triangle5.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        -10, -68, 0,

        0, -68, -2
    ] );

    createTriangle(origami2, triangle5, vertices, 0x8800FF);

    triangle6 = new THREE.Object3D();
    triangle6.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -68, -2,
    
        -10, -68, 0,

        0, -100, 0
    ] );

    createTriangle(origami2, triangle6, vertices, 0x8800FF);

    triangle7 = new THREE.Object3D();
    triangle7.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        10, -68, 0,

        0, -68, -2
    ] );

    createTriangle(origami2, triangle7, vertices, 0x8800FF);

    triangle8 = new THREE.Object3D();
    triangle8.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -68, -2,
    
        10, -68, 0,

        0, -100, 0
    ] );

    createTriangle(origami2, triangle8, vertices, 0x8800FF);

    triangle9 = new THREE.Object3D();
    triangle9.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -40, 0,
    
        0, -100, 0,

        -15, -52, 0
    ] );

    createTriangle(origami2, triangle9, vertices, 0x0000FF);

    triangle10 = new THREE.Object3D();
    triangle10.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -15, -52, 0,
    
        0, -100, 0,

        0, -40, 0
    ] );

    createTriangle(origami2, triangle10, vertices, 0x0000FF);

    triangle11 = new THREE.Object3D();
    triangle11.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -40, 0,
    
        0, -100, 0,

        15, -52, 0
    ] );

    createTriangle(origami2, triangle11, vertices, 0x0000FF);

    triangle12 = new THREE.Object3D();
    triangle12.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        15, -52, 0,
    
        0, -100, 0,

        0, -40, 0
    ] );

    createTriangle(origami2, triangle12, vertices, 0x0000FF);

    triangle13 = new THREE.Object3D();
    triangle13.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -60, 2,
    
        -10, -68, 0,

        -15, -52, 0
    ] );

    createTriangle(origami2, triangle13, vertices, 0x76ff54);

    triangle14 = new THREE.Object3D();
    triangle14.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -15, -52, 0,
    
        -10, -68, 0,

        0, -60, 2
    ] );

    createTriangle(origami2, triangle14, vertices, 0xFF0000);

    triangle15 = new THREE.Object3D();
    triangle15.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -60, 2,
    
        10, -68, 0,

        15, -52, 0
    ] );

    createTriangle(origami2, triangle15, vertices, 0x76ff54);

    triangle16 = new THREE.Object3D();
    triangle16.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        15, -52, 0,
    
        10, -68, 0,

        0, -60, 2
    ] );

    createTriangle(origami2, triangle16, vertices, 0xFF0000);

    triangle18 = new THREE.Object3D();
    triangle18.userData = {color : 0x00ff00}


    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -60, 2,

        10, -68, 0
    ] );

    createTriangle(origami2, triangle18, vertices, 0x76ff54);

    triangle19 = new THREE.Object3D();
    triangle19.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        10, -68, 0,
    
        0, -60, 2,

        0, -100, 0
    ] );

    createTriangle(origami2, triangle19, vertices, 0xFF0000);

    triangle20 = new THREE.Object3D();
    triangle20.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -60, 2,

        -10, -68, 0,
    ] );

    createTriangle(origami2, triangle20, vertices, 0x76ff54);

    triangle21 = new THREE.Object3D();
    triangle21.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -10, -68, 0,
    
        0, -60, 2,

        0, -100, 0
    ] );

    createTriangle(origami2, triangle21, vertices, 0xFF0000);

    obj.add(origami2);

}

function createOrigami3(obj){

    origami3 = new THREE.Object3D();

    triangle22 = new THREE.Object3D();
    triangle22.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        7, -100, 0,
    
        10, -85, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, triangle22, vertices, 0xFF0000);

    triangle23 = new THREE.Object3D();
    triangle23.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -85, 0,
    
        10, -85, 0,

        7, -100, 0
    ] );

    createTriangle(origami3, triangle23, vertices, 0x76ff54);

    triangle24 = new THREE.Object3D();
    triangle24.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        7, -100, 0,
    
        0, -100, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, triangle24, vertices, 0xFF0000);

    triangle25 = new THREE.Object3D();
    triangle25.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -85, 0,
    
        0, -100, 0,

        7, -100, 0
    ] );

    createTriangle(origami3, triangle25, vertices, 0x76ff54);

    triangle26 = new THREE.Object3D();
    triangle26.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -85, 0,

        -12, -100, 0
    ] );

    createTriangle(origami3, triangle26, vertices, 0xFF0000);

    triangle27 = new THREE.Object3D();
    triangle27.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -100, 0,
    
        0, -85, 0,

        0, -100, 0
    ] );

    createTriangle(origami3, triangle27, vertices, 0x76ff54);

    triangle28 = new THREE.Object3D();
    triangle28.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        0, -85, 0,
    
        -12, -100, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, triangle28, vertices, 0x0000FF);

    triangle29 = new THREE.Object3D();
    triangle29.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -12, -100, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, triangle29, vertices, 0x0000FF);

    triangle30 = new THREE.Object3D();
    triangle30.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -100, 0,
    
        -12, -85, 0,

        -20, -85, 0
    ] );

    createTriangle(origami3, triangle30, vertices, 0x76ff54);

    triangle31 = new THREE.Object3D();
    triangle31.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -20, -85, 0,
    
        -12, -85, 0,

        -12, -100, 0
    ] );

    createTriangle(origami3, triangle31, vertices, 0xFF0000);

    triangle32 = new THREE.Object3D();
    triangle32.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -20, -85, 0,

        -16, -50, 0
    ] );

    createTriangle(origami3, triangle32, vertices, 0x76ff54);

    triangle33 = new THREE.Object3D();
    triangle33.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -16, -50, 0,
    
        -20, -85, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, triangle33, vertices, 0xFF0000);

    triangle34 = new THREE.Object3D();
    triangle34.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -12, -45, 0,

        -16, -50, 0
    ] );

    createTriangle(origami3, triangle34, vertices, 0x76ff54);

    triangle35 = new THREE.Object3D();
    triangle35.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -16, -50, 0,
    
        -12, -45, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, triangle35, vertices, 0xFF0000);

    triangle36 = new THREE.Object3D();
    triangle36.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -12, -45, 0,
    
        -14, -40, 0,

        -20, -53, 0
    ] );

    createTriangle(origami3, triangle36, vertices, 0xFF0000);

    triangle37 = new THREE.Object3D();
    triangle37.userData = {color : 0x00ff00}

    vertices = new Float32Array( [
        -20, -53, 0,
    
        -14, -40, 0,

        -12, -45, 0
    ] );

    createTriangle(origami3, triangle37, vertices, 0x76ff54);

    obj.add(origami3);

}

function createTriangle(obj ,triangle, vertices, color){

    texture = new THREE.TextureLoader().load('../texture/textura.jpg');

    triangle.userData.color = color;

    geometry = new THREE.BufferGeometry();

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    geometry.computeVertexNormals();

    let material = new THREE.MeshPhongMaterial({
        shininess  :  20,
        map        :  texture,
        bumpScale  :  0.7,
    });

    material.flatShading = THREE.FlatShading;
    material.flatShading = THREE.SmoothShading;
    material.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, material);

    triangle.add(mesh);

    obj.add(triangle);
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

    /*createStepOne(smallpalanque);
    createStepTwo(smallPalanque);
    createStepThree(smallPalanque);*/

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
    spotLight1.position.set(-70, 70, -10);
    createOrigami1(spotLight1);
    scene.add( spotLight1 );
    //helper = new THREE.CameraHelper(spotLight1.shadow.camera);
    //scene.add(helper);

    spotLight2 = new THREE.SpotLight( 0xf5463f );
    spotLight2.position.set(0, 70, 0);
    createOrigami2(spotLight2);
    scene.add( spotLight2 );
    //helper = new THREE.CameraHelper(spotLight2.shadow.camera);
    //scene.add(helper);


    spotLight3 = new THREE.SpotLight( 0xf5683f );
    spotLight3.position.set(100, 70, 30);
    createOrigami3(spotLight3);
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

    lamp1.userData = {color : 0xff34f3};
    lamp2.userData = {color : 0xff34f3};
    lamp3.userData = {color : 0xff34f3};

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

    lamp1.position.set(-70, 70, -10);
    lamp2.position.set(0, 70, 0);
    lamp3.position.set(100, 70, 30);

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
    createCamera();

    origami1.rotateY(-stepOrigami1);
    origami2.rotateY(-stepOrigami2);
    origami3.rotateY(-stepOrigami3);

    stepOrigami1 = 0;
    stepOrigami2 = 0;
    stepOrigami3 = 0;

    scene.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
            node.material = new THREE.MeshPhongMaterial({
                shininess  :  20,
                map        :  texture,
                bumpScale  :  0.7,
            });
            node.material.flatShading = THREE.FlatShading;
            node.material.flatShading = THREE.SmoothShading;
            //node.geometry.computeVertexNormals();
        }
    });
}

function two(){
    'use strict';
    if(pause == 0){
        camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
        camera.position.x = 0;
        camera.position.y = -100;
        camera.position.z = 200;
        camera.zoom = 1.35;
        camera.updateProjectionMatrix();
        camera.lookAt(palanque.position);
    }
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
            if(pause == 0)
                directionalLight.visible = !directionalLight.visible;
            break;
        case "z":
        case "Z":
            if(pause == 0)
                spotLight1.visible = !spotLight1.visible;
            break;
        case "x":
        case "X":
            if(pause == 0)
                spotLight2.visible = !spotLight2.visible;
            break;
        case "c":
        case "C":
            if(pause == 0)
                spotLight3.visible = !spotLight3.visible;
            break;
        case "a":
        case "A":
            if(pause == 0){
                if(typePL == 0){
                    typePL = 1;
                    scene.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            node.material = new THREE.MeshLambertMaterial();
                            node.material.flatShading = THREE.FlatShading;
                            node.material.flastShading = THREE.SmoothShading;
                            //node.geometry.computeVertexNormals();
                        }
                    });
                }
                else{
                    typePL = 0;
                    scene.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            node.material = new THREE.MeshPhongMaterial({color : node.userData.color});
                            node.material.flatShading = THREE.FlatShading;
                            node.material.flatShading = THREE.SmoothShading;
                            //node.geometry.computeVertexNormals();
                        }
                    });
                }
            }
            break;
        case "s":
        case "S":
            if(pause == 0){
                scene.traverse(function (node) {
                    if (node instanceof THREE.Mesh) {
                        if(typeBPL == 0){
                            node.material = new THREE.MeshLambertMaterial();
                            typeBPL = 1;
                        }
                        else if(typeBPL == 1 && typePL == 0){
                            node.material = new THREE.MeshPhongMaterial({
                                shininess  :  20,
                                map        :  texture,
                                bumpScale  :  0.7,
                            });
                            typeBPL = 0;
                        }
                        else if(typeBPL == 1 && typePL == 1){
                            node.material = new THREE.MeshLambertMaterial();
                            typeBPL = 0;
                        }
                        
                    }
                });
            }
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