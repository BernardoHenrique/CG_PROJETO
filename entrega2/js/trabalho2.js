/*global THREE, requestAnimationFrame, console*/
var torus1, torus2, torus3, World;

var renderer, scene, material, geometry, mesh, camera, mesh2, mesh3, mesh4, mesh5, mesh6;

var tableArticulated, coneArticulated, sphereArticulated, obj2, obj3, obj4, obj5, obj6;

var capsules;

var trash1, trash2, trash3, trash4, trash5, trash6, trash7, trash8, trash9, trash10, trash11, trash12, trash13, trash14;

var trash15, trash16, trash17, trash18, trash19, trash20;

var R;

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

    R = 1.2 * 70;

    trash1 = new THREE.Object3D();
    trash1.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash2 = new THREE.Object3D();
    trash2.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash3 = new THREE.Object3D();
    trash3.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash4 = new THREE.Object3D();
    trash4.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash5 = new THREE.Object3D();
    trash5.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash6 = new THREE.Object3D();
    trash6.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash7 = new THREE.Object3D();
    trash7.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash8 = new THREE.Object3D();
    trash8.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash9 = new THREE.Object3D();
    trash9.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash10 = new THREE.Object3D();
    trash10.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash11 = new THREE.Object3D();
    trash11.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash12 = new THREE.Object3D();
    trash12.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash13 = new THREE.Object3D();
    trash13.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash14 = new THREE.Object3D();
    trash14.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash15 = new THREE.Object3D();
    trash15.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash16 = new THREE.Object3D();
    trash16.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash17 = new THREE.Object3D();
    trash17.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash18 = new THREE.Object3D();
    trash18.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash19 = new THREE.Object3D();
    trash19.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    trash20 = new THREE.Object3D();
    trash20.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

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

    trash1.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash1.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash1.userData.ang1) * Math.cos(trash1.userData.ang2);
    y = R * Math.sin(trash1.userData.ang1) * Math.sin(trash1.userData.ang2);
    z = R * Math.cos(trash1.userData.ang1);

    trash1.add(mesh);
    trash1.position.set(x, y, z);

    trash2.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash2.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash2.userData.ang1) * Math.cos(trash2.userData.ang2);
    y = R * Math.sin(trash2.userData.ang1) * Math.sin(trash2.userData.ang2);
    z = R * Math.cos(trash2.userData.ang1);

    trash2.add(mesh2);
    trash2.position.set(x, y, z);

    trash3.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash3.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash3.userData.ang1) * Math.cos(trash3.userData.ang2);
    y = R * Math.sin(trash3.userData.ang1) * Math.sin(trash3.userData.ang2);
    z = R * Math.cos(trash3.userData.ang1);

    trash3.add(mesh3);
    trash3.position.set(x, y, z);

    trash4.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash4.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash4.userData.ang1) * Math.cos(trash4.userData.ang2);
    y = R * Math.sin(trash4.userData.ang1) * Math.sin(trash4.userData.ang2);
    z = R * Math.cos(trash4.userData.ang1);

    trash4.add(mesh4);
    trash4.position.set(x, y, z);

    trash5.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash5.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash5.userData.ang1) * Math.cos(trash5.userData.ang2);
    y = R * Math.sin(trash5.userData.ang1) * Math.sin(trash5.userData.ang2);
    z = R * Math.cos(trash5.userData.ang1);

    trash5.add(mesh5);
    trash5.position.set(x, y, z);

    trash6.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash6.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash6.userData.ang1) * Math.cos(trash6.userData.ang2);
    y = R * Math.sin(trash6.userData.ang1) * Math.sin(trash6.userData.ang2);
    z = R * Math.cos(trash6.userData.ang1);

    trash6.add(mesh6);
    trash6.position.set(x, y, z);

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

    trash7.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash7.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash7.userData.ang1) * Math.cos(trash7.userData.ang2);
    y = R * Math.sin(trash7.userData.ang1) * Math.sin(trash7.userData.ang2);
    z = R * Math.cos(trash7.userData.ang1);

    trash7.add(mesh);
    trash7.position.set(x, y, z);

    trash8.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash8.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash8.userData.ang1) * Math.cos(trash8.userData.ang2);
    y = R * Math.sin(trash8.userData.ang1) * Math.sin(trash8.userData.ang2);
    z = R * Math.cos(trash8.userData.ang1);

    trash8.add(mesh2);
    trash8.position.set(x, y, z);

    trash9.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash9.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash9.userData.ang1) * Math.cos(trash9.userData.ang2);
    y = R * Math.sin(trash9.userData.ang1) * Math.sin(trash9.userData.ang2);
    z = R * Math.cos(trash9.userData.ang1);

    trash9.add(mesh3);
    trash9.position.set(x, y, z);

    trash10.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash10.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash10.userData.ang1) * Math.cos(trash10.userData.ang2);
    y = R * Math.sin(trash10.userData.ang1) * Math.sin(trash10.userData.ang2);
    z = R * Math.cos(trash10.userData.ang1);

    trash10.add(mesh4);
    trash10.position.set(x, y, z);

    trash11.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash11.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash11.userData.ang1) * Math.cos(trash11.userData.ang2);
    y = R * Math.sin(trash11.userData.ang1) * Math.sin(trash11.userData.ang2);
    z = R * Math.cos(trash11.userData.ang1);

    trash11.add(mesh5);
    trash11.position.set(x, y, z);

    trash12.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash12.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash12.userData.ang1) * Math.cos(trash12.userData.ang2);
    y = R * Math.sin(trash12.userData.ang1) * Math.sin(trash12.userData.ang2);
    z = R * Math.cos(trash12.userData.ang1);

    trash12.add(mesh6);
    trash12.position.set(x, y, z);

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

    trash13.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash13.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash13.userData.ang1) * Math.cos(trash13.userData.ang2);
    y = R * Math.sin(trash13.userData.ang1) * Math.sin(trash13.userData.ang2);
    z = R * Math.cos(trash13.userData.ang1);

    trash13.add(mesh);
    trash13.position.set(x, y, z);

    trash14.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash14.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash14.userData.ang1) * Math.cos(trash14.userData.ang2);
    y = R * Math.sin(trash14.userData.ang1) * Math.sin(trash14.userData.ang2);
    z = R * Math.cos(trash14.userData.ang1);
    
    trash14.add(mesh2);
    trash14.position.set(x, y, z);

    trash15.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash15.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash15.userData.ang1) * Math.cos(trash15.userData.ang2);
    y = R * Math.sin(trash15.userData.ang1) * Math.sin(trash15.userData.ang2);
    z = R * Math.cos(trash15.userData.ang1);
    
    trash15.add(mesh3);
    trash15.position.set(x, y, z);

    trash16.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash16.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash16.userData.ang1) * Math.cos(trash16.userData.ang2);
    y = R * Math.sin(trash16.userData.ang1) * Math.sin(trash16.userData.ang2);
    z = R * Math.cos(trash16.userData.ang1);
    
    trash16.add(mesh4);
    trash16.position.set(x, y, z);

    trash17.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash17.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash17.userData.ang1) * Math.cos(trash17.userData.ang2);
    y = R * Math.sin(trash17.userData.ang1) * Math.sin(trash17.userData.ang2);
    z = R * Math.cos(trash17.userData.ang1);
    
    trash17.add(mesh5);
    trash17.position.set(x, y, z);

    trash18.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash18.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash18.userData.ang1) * Math.cos(trash18.userData.ang2);
    y = R * Math.sin(trash18.userData.ang1) * Math.sin(trash18.userData.ang2);
    z = R * Math.cos(trash18.userData.ang1);
    
    trash18.add(mesh6);
    trash18.position.set(x, y, z);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.BoxGeometry(3, 3, 3);
    mesh = new THREE.Mesh(geometry, material);

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false});
    geometry = new THREE.ConeGeometry(2, 3, 64);
    mesh2 = new THREE.Mesh(geometry, material);

    trash19.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash19.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash19.userData.ang1) * Math.cos(trash19.userData.ang2);
    y = R * Math.sin(trash19.userData.ang1) * Math.sin(trash19.userData.ang2);
    z = R * Math.cos(trash19.userData.ang1);
    
    trash19.add(mesh);
    trash19.position.set(x, y, z);

    trash20.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    trash20.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    x = R * Math.sin(trash20.userData.ang1) * Math.cos(trash20.userData.ang2);
    y = R * Math.sin(trash20.userData.ang1) * Math.sin(trash20.userData.ang2);
    z = R * Math.cos(trash20.userData.ang1);
    
    trash20.add(mesh2);
    trash20.position.set(x, y, z);

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

    R = 1.2 * 70;

    tableArticulated = new THREE.Object3D();
    tableArticulated.userData = { jumping: false, step: 0, ang1: 0, ang2: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xffff19, wireframe: false});
    geometry = new THREE.CylinderGeometry(1, 1, 4.5, 64, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    tableArticulated.add(mesh);

    tableArticulated.userData.ang1 = Math.random() * (2*Math.PI - 0) + 0;
    tableArticulated.userData.ang2 = Math.random() * (2*Math.PI - 0) + 0;

    tableArticulated.position.set(R * Math.sin(tableArticulated.userData.ang1) * Math.cos(tableArticulated.userData.ang2),
    R * Math.sin(tableArticulated.userData.ang1) * Math.sin(tableArticulated.userData.ang2), R * Math.cos(tableArticulated.userData.ang1));

    createFather(tableArticulated, x, y, z);

    tableArticulated.rotateX(Math.sin(tableArticulated.userData.ang1));
    tableArticulated.rotateX(Math.cos(tableArticulated.userData.ang2));
    
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

    tableArticulated.userData.step -= 0.04;

    x = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.cos(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    y = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.sin(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    z = R * Math.cos(tableArticulated.userData.ang1);

    tableArticulated.position.set(x, y, z);
}
function moveUp(){
    tableArticulated.userData.step += 0.04;

    x = R * Math.sin(tableArticulated.userData.ang1) * Math.cos(tableArticulated.userData.ang2);
    y = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.sin(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    z = R * Math.cos(tableArticulated.userData.ang1 + tableArticulated.userData.step);

    tableArticulated.position.set(x, y, z);
}
function moveRight(){
    tableArticulated.userData.step += 0.04;

    x = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.cos(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    y = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.sin(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    z = R * Math.cos(tableArticulated.userData.ang1);

    tableArticulated.position.set(x, y, z);
}
function moveDown(){
    tableArticulated.userData.step -= 0.04;

    x = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.cos(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    y = R * Math.sin(tableArticulated.userData.ang1 + tableArticulated.userData.step) * Math.sin(tableArticulated.userData.ang2 + tableArticulated.userData.step);
    z = R * Math.cos(tableArticulated.userData.ang1);

    tableArticulated.position.set(x, y, z);
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
