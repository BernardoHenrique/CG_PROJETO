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

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -40, 0,

        -30, -70, 2
    ] );

    createTriangle(origami1, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -40, 0,

        30, -70, 2
    ] );

    createTriangle(origami1, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -30, -70, 2,
    
        0, -40, 0,

        0, -100, 0
    ] );

    createTriangle(origami1, vertices, 0xFF0000);

    vertices = new Float32Array( [
        30, -70, 2,
    
        0, -40, 0,

        0, -100, 0
    ] );

    createTriangle(origami1, vertices, 0x76ff54);

    obj.add(origami1);

}

function createOrigami2(obj){

    origami2 = new THREE.Object3D();

    vertices = new Float32Array( [
        0, -100, 0,
    
        -10, -68, 0,

        0, -68, -2
    ] );

    createTriangle(origami2, vertices, 0x8800FF);

    vertices = new Float32Array( [
        0, -68, -2,
    
        -10, -68, 0,

        0, -100, 0
    ] );

    createTriangle(origami2, vertices, 0x8800FF);

    vertices = new Float32Array( [
        0, -100, 0,
    
        10, -68, 0,

        0, -68, -2
    ] );

    createTriangle(origami2, vertices, 0x8800FF);

    vertices = new Float32Array( [
        0, -68, -2,
    
        10, -68, 0,

        0, -100, 0
    ] );

    createTriangle(origami2, vertices, 0x8800FF);

    vertices = new Float32Array( [
        0, -40, 0,
    
        0, -100, 0,

        -15, -52, 0
    ] );

    createTriangle(origami2, vertices, 0x0000FF);

    vertices = new Float32Array( [
        -15, -52, 0,
    
        0, -100, 0,

        0, -40, 0
    ] );

    createTriangle(origami2, vertices, 0x0000FF);

    vertices = new Float32Array( [
        0, -40, 0,
    
        0, -100, 0,

        15, -52, 0
    ] );

    createTriangle(origami2, vertices, 0x0000FF);

    vertices = new Float32Array( [
        15, -52, 0,
    
        0, -100, 0,

        0, -40, 0
    ] );

    createTriangle(origami2, vertices, 0x0000FF);

    vertices = new Float32Array( [
        0, -60, 2,
    
        -10, -68, 0,

        -15, -52, 0
    ] );

    createTriangle(origami2, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -15, -52, 0,
    
        -10, -68, 0,

        0, -60, 2
    ] );

    createTriangle(origami2, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -60, 2,
    
        10, -68, 0,

        15, -52, 0
    ] );

    createTriangle(origami2, vertices, 0x76ff54);

    vertices = new Float32Array( [
        15, -52, 0,
    
        10, -68, 0,

        0, -60, 2
    ] );

    createTriangle(origami2, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -60, 2,

        10, -68, 0
    ] );

    createTriangle(origami2, vertices, 0x76ff54);

    vertices = new Float32Array( [
        10, -68, 0,
    
        0, -60, 2,

        0, -100, 0
    ] );

    createTriangle(origami2, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -60, 2,

        -10, -68, 0,
    ] );

    createTriangle(origami2, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -10, -68, 0,
    
        0, -60, 2,

        0, -100, 0
    ] );

    createTriangle(origami2, vertices, 0xFF0000);

    obj.add(origami2);

}

function createOrigami3(obj){

    origami3 = new THREE.Object3D();

    vertices = new Float32Array( [
        7, -100, 0,
    
        10, -85, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -85, 0,
    
        10, -85, 0,

        7, -100, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        7, -100, 0,
    
        0, -100, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        0, -85, 0,
    
        0, -100, 0,

        7, -100, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        0, -100, 0,
    
        0, -85, 0,

        -12, -100, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        -12, -100, 0,
    
        0, -85, 0,

        0, -100, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        0, -85, 0,
    
        -12, -100, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, vertices, 0x0000FF);

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -12, -100, 0,

        0, -85, 0
    ] );

    createTriangle(origami3, vertices, 0x0000FF);

    vertices = new Float32Array( [
        -12, -100, 0,
    
        -12, -85, 0,

        -20, -85, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -20, -85, 0,
    
        -12, -85, 0,

        -12, -100, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -20, -85, 0,

        -16, -50, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -16, -50, 0,
    
        -20, -85, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        -12, -85, 0,
    
        -12, -45, 0,

        -16, -50, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    vertices = new Float32Array( [
        -16, -50, 0,
    
        -12, -45, 0,

        -12, -85, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        -12, -45, 0,
    
        -14, -40, 0,

        -20, -53, 0
    ] );

    createTriangle(origami3, vertices, 0xFF0000);

    vertices = new Float32Array( [
        -20, -53, 0,
    
        -14, -40, 0,

        -12, -45, 0
    ] );

    createTriangle(origami3, vertices, 0x76ff54);

    obj.add(origami3);

}

function createTriangle(obj, vertices, color){

    texture = new THREE.TextureLoader().load('../texture/textura.jpg');

    geometry = new THREE.BufferGeometry();

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    geometry.computeVertexNormals();

    material = new THREE.MeshPhongMaterial({
        shininess  :  20,
        map        :  texture,
        bumpScale  :  0.7,
    });

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
    spotLight1.position.set(-70, 80, -10);
    createOrigami1(spotLight1);
    scene.add( spotLight1 );
    spotLight1.target.position.set(-70,0,-10);
    scene.add( spotLight1.target );

    spotLight2 = new THREE.SpotLight( 0xf5463f );
    spotLight2.position.set(0, 80, 0);
    createOrigami2(spotLight2);
    scene.add( spotLight2 );
    spotLight2.target.position.set(0, 0, 0);
    scene.add( spotLight2.target );


    spotLight3 = new THREE.SpotLight( 0xf5683f );
    spotLight3.position.set(100, 80, 30);
    createOrigami3(spotLight3);
    scene.add( spotLight3 );
    spotLight3.target.position.set(100,0,30);
    scene.add( spotLight3.target );
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
            if (!node.geometry instanceof THREE.BufferGeometry) {
                node.material = new THREE.MeshPhongMaterial({
                    shininess  :  20,
                    map        :  texture,
                    bumpScale  :  0.7,
                });
                typeBPL = 0;
            }
            else{
                node.material = new THREE.MeshPhongMaterial({color: node.material.color});
                typeBPL = 0;
            }
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
                            node.material = new THREE.MeshLambertMaterial({color: node.material.color});
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
                            if (!node.geometry instanceof THREE.BufferGeometry) {
                                node.material = new THREE.MeshPhongMaterial({
                                    shininess  :  20,
                                    map        :  texture,
                                    bumpScale  :  0.7,
                                });
                                typeBPL = 0;
                            }
                            else{
                                node.material = new THREE.MeshPhongMaterial({color: node.material.color});
                                typeBPL = 0;
                            }
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
                            node.material = new THREE.MeshBasicMaterial({color: node.material.color});
                            typeBPL = 1;
                            node = new THREE.Mesh(node.geometry, node.material);
                        }
                        else if(typeBPL == 1 && typePL == 0){
                            if (!node.geometry instanceof THREE.BufferGeometry) {
                                node.material = new THREE.MeshPhongMaterial({
                                    shininess  :  20,
                                    map        :  texture,
                                    bumpScale  :  0.7,
                                });
                                typeBPL = 0;
                                node = new THREE.Mesh(node.geometry, node.material);
                            }
                            else{
                                node.material = new THREE.MeshPhongMaterial({color: node.material.color});
                                typeBPL = 0;
                                node = new THREE.Mesh(node.geometry, node.material);
                            }
                        }
                        else if(typeBPL == 1 && typePL == 1){
                            node.material = new THREE.MeshLambertMaterial({color: node.material.color});
                            typeBPL = 0;
                            node = new THREE.Mesh(node.geometry, node.material);
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