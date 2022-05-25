/*global THREE, requestAnimationFrame, console*/

var torus1, torus2, torus3, World;

var renderer, scene, material, geometry, mesh, camera

var tableArticulated, coneArticulated, sphereArticulated, obj2, obj3, obj4, obj5, obj6;

var capsules;

var trash1, trash2, trash3, trash4, trash5, trash6, trash7, trash8, trash9, trash10, trash11, trash12, trash13, trash14;
var trash15, trash16, trash17, trash18, trash19, trash20;

var controller = {
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

    geometry = new THREE.SphereGeometry(70, 30, 30);
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
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.x = 0 ;
    camera.position.y = 0 ;
    camera.position.z = 200;
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
    
    render();
    
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

    for(e in controller){
        if (controller[e].pressed){
            controller[e].func();
        }
    }

    render();
    
    requestAnimationFrame(animate);
}
