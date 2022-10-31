/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;
var cube, cubeOrbit, Octahedron, rightCircle, leftCircle, rightBar, leftBar;

var torus1, torus2, torus3, centerSphere;

var tableArticulated, coneArticulated, sphereArticulated, obj2, obj3;

var square, triangle1, triangle2;

var controller = {
    'ArrowLeft': {pressed: false, func: moveLeft},
    'ArrowUp': {pressed: false, func: moveUp},
    'ArrowRight': {pressed: false, func: moveRight},
    'ArrowDown': {pressed: false, func: moveDown},
    'c': {pressed: false, func: moveOutside},
    'd': {pressed: false, func: moveInside},
    'x': {pressed: false, func: x},
    'X': {pressed: false, func: x},
    'z': {pressed: false, func: z},
    'Z': {pressed: false, func: z},
    'a': {pressed: false, func: a},
    'A': {pressed: false, func: a},
    's': {pressed: false, func: s},
    'S': {pressed: false, func: s},
    'q': {pressed: false, func: q},
    'Q': {pressed: false, func: q},
    'w': {pressed: false, func: w},
    'W': {pressed: false, func: w},
    '1': {pressed: false, func: one},
    '2': {pressed: false, func: two},
    '3': {pressed: false, func: three},

}

function createGrandParent(x, y, z){
    'use strict';

    tableArticulated = new THREE.Object3D();
    tableArticulated.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x4c4cce, wireframe: false});
    geometry = new THREE.BoxGeometry(30, 6, 20, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    tableArticulated.add(mesh);
    tableArticulated.position.set(x, y, x);

    createFather(tableArticulated, x, y, z);
    
    scene.add(tableArticulated);
}

function createFather(obj, x, y, z){
    'use strict';

    coneArticulated = new THREE.Object3D();
    coneArticulated.userData = { jumping: false, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x1e1e51, wireframe: false});
    geometry = new THREE.CylinderGeometry(3, 1, 20, 3, 2, 3);
    obj2 = new THREE.Mesh(geometry, material);
    obj2.position.set(0, 13, 0);

    coneArticulated.add(obj2);

    createChild(coneArticulated, x, y, z);
    
    obj.add(coneArticulated);
}

function createChild(obj, x, y, z){
    'use strict';

    sphereArticulated = new THREE.Object3D();
    sphereArticulated.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x53536c, wireframe: false});
    geometry = new THREE.SphereGeometry(6, 10, 10);
    obj3 = new THREE.Mesh(geometry, material);
    obj3.position.set(0, 28, 0);

    sphereArticulated.add(obj3);
    
    obj.add(sphereArticulated);
}

function createSquare(x, y, z) {
    'use strict';
    
    square = new THREE.Object3D();
    square.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xcf3a38, wireframe: false });
    geometry = new THREE.TorusGeometry(15,3,4,4);
    mesh = new THREE.Mesh(geometry, material);

    square.add(mesh);
    square.position.set(x, y, z);
    square.rotateZ(Math.PI/4);
    
    scene.add(square);
}


function createTriangle1(x, y, z) {
    'use strict';
    
    triangle1 = new THREE.Object3D();
    triangle1.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xA6F501, wireframe: false });
    geometry = new THREE.TorusGeometry(12,1.5,3,3);
    mesh = new THREE.Mesh(geometry, material);
    
    triangle1.add(mesh);
    triangle1.position.set(x, y, z);
    triangle1.rotateY(Math.PI/2);
    
    scene.add(triangle1);
}

function createTriangle2(x, y, z) {
    'use strict';
    
    triangle2 = new THREE.Object3D();
    triangle2.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xc98928, wireframe: false });
    geometry = new THREE.TorusGeometry(12,1.5,3,3);
    mesh = new THREE.Mesh(geometry, material);
    
    triangle2.add(mesh);
    triangle2.position.set(x, y, z);
    triangle2.rotateY(Math.PI/2);
    
    scene.add(triangle2);
}
function createCube(x, y, z) {
    'use strict';
    
    cube = new THREE.Object3D();
    cube.userData = { jumping: true, step: 0 };

    var cubeMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x99ffff, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x3333ff, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x09ff8d, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x67e58d, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0xf284ea, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x9e739b, wireframe: false, side: THREE.Frontside }),
    ];
    
    material = new THREE.MeshFaceMaterial(cubeMaterials);
    geometry = new THREE.CubeGeometry(7.5, 7.5, 7.5, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    cube.add(mesh);
    cube.position.set(x, y, z);
    
    scene.add(cube);
}


function createCubeOrbit(x, y, z) {
    'use strict';
    
    cubeOrbit = new THREE.Object3D();
    cubeOrbit.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x324f3a, wireframe: false });
    geometry = new THREE.TorusGeometry(9.5, 2, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    cubeOrbit.add(mesh);
    cubeOrbit.position.set(x, y, z);
    
    scene.add(cubeOrbit);
}

function createOctahedron(x, y, z){
    'use strict';
    
    Octahedron = new THREE.Object3D();
    Octahedron.userData = { jumping: true, step: 0 };
    
    geometry = new THREE.OctahedronGeometry(8.5, 0);
    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false }),
    mesh = new THREE.Mesh(geometry, material);
    
    Octahedron.add(mesh);
    Octahedron.position.set(x, y, z);
    
    scene.add(Octahedron);
}

function createRightCircle(x, y, z){
    rightCircle = new THREE.Object3D();
    rightCircle.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xFF0023, wireframe: false });
    geometry = new THREE.TorusGeometry(20, 1.25, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    rightCircle.add(mesh);
    rightCircle.position.set(x, y, z);

    rightCircle.rotateX(Math.PI/2);
    
    scene.add(rightCircle);
}

function createLeftCircle(x, y, z){
    leftCircle = new THREE.Object3D();
    leftCircle.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.TorusGeometry(20, 1.25, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    leftCircle.add(mesh);
    leftCircle.position.set(x, y, z);
    
    leftCircle.rotateX(Math.PI/2);

    scene.add(leftCircle);
}

function createRightBar(x, y, z){
    'use strict';
    
    rightBar = new THREE.Object3D();
    rightBar.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x32fa6e, wireframe: false });
    geometry = new THREE.CubeGeometry(3, 55, 3, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    rightBar.add(mesh);
    rightBar.position.set(x, y, z);

    rightBar.rotateZ(Math.PI - 9.7);
    
    scene.add(rightBar);
}

function createLeftBar(x, y, z){
    'use strict';
    
    leftBar = new THREE.Object3D();
    leftBar.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xfcff4f, wireframe: false });
    geometry = new THREE.CubeGeometry(3, 55, 3, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    leftBar.add(mesh);
    leftBar.position.set(x, y, z);
    
    leftBar.rotateZ(Math.PI + 9.7);

    scene.add(leftBar);
}

function createTorus1(x, y, z) {
    'use strict';
    
    torus1 = new THREE.Object3D();
    torus1.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0xc0c0c0, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/3);
    mesh = new THREE.Mesh(geometry, material);

    torus1.add(mesh);
    torus1.position.set(x, y, z);

    scene.add(torus1);
}

function createTorus2(x, y, z) {
    'use strict';
    
    torus2 = new THREE.Object3D();
    torus2.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0xA0A0A0, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/4);
    mesh = new THREE.Mesh(geometry, material);

    torus2.add(mesh);
    torus2.position.set(x, y, z);
    torus2.rotateZ((Math.PI/3)*2)
    scene.add(torus2);
}

function createTorus3(x, y, z) {
    'use strict';
    
    torus3 = new THREE.Object3D();
    torus3.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/5);
    mesh = new THREE.Mesh(geometry, material);

    torus3.add(mesh);
    torus3.position.set(x, y, z);
    torus3.rotateZ((Math.PI/3)*4);

    scene.add(torus3);
}

function createCenterSphere(x, y, z) {
    'use strict';
    
    centerSphere = new THREE.Object3D();
    centerSphere.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });

    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);

    centerSphere.add(mesh);
    centerSphere.position.set(x, y, z);
    
    scene.add(centerSphere);
}


function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    
    createCube(60, 20, 30);
    createCubeOrbit(60, 20, 30);

    createTorus1(60, -20, -100);
    createTorus2(60, -20, -100);
    createTorus3(60, -20, -100);
    createCenterSphere(60, -20, -100);

    createOctahedron(0, 0, 0);
    createRightCircle(-22, 0, 0);
    createLeftCircle(22, 0, 0);
    createRightBar(32, 0, 0);
    createLeftBar(-32, 0, 0);

    createSquare(-80, 25, 0);
    createTriangle1(-83.25, 34,0);
    createTriangle2(-76.75, 16,0);

    createGrandParent(40, -20, 30);
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 80 ;
    camera.position.y = 80 ;
    camera.position.z = 80;
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

function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
        case 52: //4
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
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
    
    //render();
    
    window.addEventListener("keydown", (e) => {
        controller[e.key].pressed = true;
        window.addEventListener("keydown", onKeyDown);
    })

    window.addEventListener("keyup", (e) => {
        controller[e.key].pressed = false;
    })

    window.addEventListener("resize", onResize);
}

function animate() {

    if (Octahedron.userData.jumping) {
        Octahedron.userData.step += 0.04;
        Octahedron.position.x = 15 * (Math.sin(Octahedron.userData.step));
        Octahedron.position.y = 15 * (Math.cos(Octahedron.userData.step));
    }

    if (rightBar.userData.jumping) {
        rightBar.userData.step += 0.04;
        rightBar.position.y = 15 * (Math.cos(rightBar.userData.step));
    }
    
    if (leftBar.userData.jumping) {
        leftBar.userData.step += 0.04;
        leftBar.position.y = 15 * (Math.cos(leftBar.userData.step));
    }

    if (rightCircle.userData.jumping){
        rightCircle.rotation.z += 0.1;
    }

    if (leftCircle.userData.jumping){
        leftCircle.rotation.z += 0.1;
    }

    if (Octahedron.userData.jumping){
        Octahedron.rotation.y += 0.02;
    }

    if (cube.userData.jumping) {
        cube.rotation.y += 0.02;
        cube.rotation.x += 0.02;
    }

    if (cubeOrbit.userData.jumping) {
        cubeOrbit.userData.step += 0.04;
        cubeOrbit.rotation.y += 0.05;
        cubeOrbit.rotation.x += 0.05;
    }

    if (Octahedron.userData.jumping) {
        Octahedron.rotation.z += 0.02;
        Octahedron.rotation.x += 0.02;
    }

    if(torus1.userData.jumping){

        torus1.userData.step += 0.04;
        torus2.userData.step += 0.04;
        torus3.userData.step += 0.04;
        centerSphere.userData.step += 0.04;

        torus1.position.y = (50 * (Math.sin(centerSphere.userData.step)));
        torus1.position.z = (50 * (Math.cos(centerSphere.userData.step)));
        torus1.position.x = (50 * (Math.sin(centerSphere.userData.step)));
        torus1.rotation.z -= 0.1;
        torus1.rotation.y += 0.04;
        torus1.rotation.x += 0.2;

        centerSphere.position.y = (50 * (Math.sin(centerSphere.userData.step)));
        centerSphere.position.z = (50 * (Math.cos(centerSphere.userData.step)));
        centerSphere.position.x = (50 * (Math.sin(centerSphere.userData.step)));

        torus2.position.y = (50 * (Math.sin(centerSphere.userData.step)));
        torus2.position.z = (50 * (Math.cos(centerSphere.userData.step)));
        torus2.position.x = (50 * (Math.sin(centerSphere.userData.step)));
        torus2.rotation.z -= 0.1;
        torus2.rotation.y += 0.04;
        torus2.rotation.x += 0.2;

        torus3.position.y = (50 * (Math.sin(centerSphere.userData.step)));
        torus3.position.z = (50 * (Math.cos(centerSphere.userData.step)));
        torus3.position.x = (50 * (Math.sin(centerSphere.userData.step)));
        torus3.rotation.z -= 0.1;
        torus3.rotation.y += 0.04;
        torus3.rotation.x += 0.2;
    }

    if (triangle1.userData.jumping) {
        triangle1.rotation.z += 0.05
        triangle2.rotation.z += 0.05
        triangle1.rotation.y -= 0.05
        triangle2.rotation.y -= 0.05
        square.rotation.y -= 0.05
    }

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
function moveInside(){
    tableArticulated.position.z -= 1;
}
function moveOutside(){
    tableArticulated.position.z += 1;
}

function w(){
    tableArticulated.rotation.z += 0.1;
}
function q(){
    tableArticulated.rotation.z -= 0.1;
}
function s(){
    coneArticulated.userData.step -= 0.04;
    coneArticulated.position.x = (10 * (Math.sin(coneArticulated.userData.step)));

    coneArticulated.rotation.y -= 0.1;
}

function a(){
    coneArticulated.userData.step += 0.04;
    coneArticulated.position.x = (10 * (Math.sin(coneArticulated.userData.step)));
    
    coneArticulated.rotation.y += 0.1; 
}

function z(){
    sphereArticulated.rotation.y += 0.05;
}

function x(){
    sphereArticulated.rotation.y -= 0.05;
}

function three(){
    camera.position.x = 120;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(scene.position);
}

function two(){
    camera.position.x = 0;
    camera.position.y = 130;
    camera.position.z = 0;
    camera.lookAt(scene.position);
}
function one(){
    camera.position.x = 0;
    camera.position.y = -5;
    camera.position.z = 110;
    camera.lookAt(scene.position);
}

scene.traverse(function (node) {
    if (node instanceof THREE.Mesh) {
        node.material.wireframe = !node.material.wireframe;
    }
});