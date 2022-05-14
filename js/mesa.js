/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

var ball;

var bernardoBox, bernardoTorus, bernardoOcta, bernardoCircle1, bernardoCircle2, bernardoBar1, bernardoBar2;

var HugoTorus, wheelCenter, weightHugoL, weightHugoR, weightHugoCenter, wightHugoCircle;

/*function addTableLeg(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CubeGeometry(2, 6, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y - 3, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    
    ball.add(mesh);
    ball.position.set(x, y, z);
    
    scene.add(ball);
}*/

function createBernardoBox(x, y, z) {
    'use strict';
    
    bernardoBox = new THREE.Object3D();
    bernardoBox.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshNormalMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.CubeGeometry(10, 10, 10, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoBox.add(mesh);
    bernardoBox.position.set(x, y, z);
    
    scene.add(bernardoBox);
}


function createBernardoTorus(x, y, z) {
    'use strict';
    
    bernardoTorus = new THREE.Object3D();
    bernardoTorus.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.TorusGeometry(12, 2, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoTorus.add(mesh);
    bernardoTorus.position.set(x, y, z);
    
    scene.add(bernardoTorus);
}

function createBernardoOctahedron(x, y, z){
    'use strict';
    
    bernardoOcta = new THREE.Object3D();
    bernardoOcta.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshNormalMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.OctahedronGeometry(8.5, 0);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoOcta.add(mesh);
    bernardoOcta.position.set(x, y, z);
    
    scene.add(bernardoOcta);
}

function createBernardoCircle1(x, y, z){
    bernardoCircle1 = new THREE.Object3D();
    bernardoCircle1.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshNormalMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.TorusGeometry(20, 1.25, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoCircle1.add(mesh);
    bernardoCircle1.position.set(x, y, z);

    bernardoCircle1.rotateX(Math.PI/2);
    
    scene.add(bernardoCircle1);
}

function createBernardoCircle2(x, y, z){
    bernardoCircle2 = new THREE.Object3D();
    bernardoCircle2.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.TorusGeometry(20, 1.25, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoCircle2.add(mesh);
    bernardoCircle2.position.set(x, y, z);
    
    bernardoCircle2.rotateX(Math.PI/2);

    scene.add(bernardoCircle2);
}

function createBernardoBar1(x, y, z){
    'use strict';
    
    bernardoBar1 = new THREE.Object3D();
    bernardoBar1.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshNormalMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.CubeGeometry(3, 55, 3, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoBar1.add(mesh);
    bernardoBar1.position.set(x, y, z);

    bernardoBar1.rotateZ(Math.PI - 9.7);
    
    scene.add(bernardoBar1);
}

function createBernardoBar2(x, y, z){
    'use strict';
    
    bernardoBar2 = new THREE.Object3D();
    bernardoBar2.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshNormalMaterial({ color: 0x00aaff, wireframe: false });
    geometry = new THREE.CubeGeometry(3, 55, 3, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoBar2.add(mesh);
    bernardoBar2.position.set(x, y, z);
    
    bernardoBar2.rotateZ(Math.PI + 9.7);

    scene.add(bernardoBar2);
}

function createHugoTorus(x, y, z) {
    'use strict';
    
    HugoTorus = new THREE.Object3D();
    HugoTorus.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.TorusGeometry(10, 3, 16, 10);
    mesh = new THREE.Mesh(geometry, material);

    HugoTorus.add(mesh);
    HugoTorus.position.set(x, y, z);

    scene.add(HugoTorus);
}

function createHugoWheel(x, y, z) {
    'use strict';
    
    wheelCenter = new THREE.Object3D();
    wheelCenter.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);

    wheelCenter.add(mesh);
    wheelCenter.position.set(x, y, z);
    
    scene.add(wheelCenter);
}

/*function createTable(x, y, z) {
    'use strict';
    
    var table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, -1, -8);
    addTableLeg(table, -25, -1, 8);
    addTableLeg(table, 25, -1, 8);
    addTableLeg(table, 25, -1, -8);
    
    scene.add(table);
    
    table.position.set(-x, y, z);
}*/

function createHugoWeight(x, y, z){
    addWeightLeft(x, y, z - 7.5);
    addWeightRight(x, y, z + 7.5);
    addWeightCenter(x, y, z);
    addWightCircle(x, y, z);
}

function addWeightLeft(x, y, z){
    'use strict';
    
    weightHugoL = new THREE.Object3D();
    weightHugoL.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.SphereGeometry(3, 20, 20);
    mesh = new THREE.Mesh(geometry, material);

    weightHugoL.add(mesh);
    weightHugoL.position.set(x, y, z);
    
    scene.add(weightHugoL);
}

function addWeightRight(x, y, z){
    'use strict';
    
    weightHugoR = new THREE.Object3D();
    weightHugoR.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.SphereGeometry(3, 20, 20);
    mesh = new THREE.Mesh(geometry, material);

    weightHugoR.add(mesh);
    weightHugoR.position.set(x, y, z);
    
    scene.add(weightHugoR);
}

function addWeightCenter(x, y, z){
    'use strict';
    
    weightHugoCenter = new THREE.Object3D();
    weightHugoCenter.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    geometry = new THREE.CylinderGeometry( 1, 1, 10, 32);
    mesh = new THREE.Mesh(geometry, material);

    weightHugoCenter.add(mesh);
    weightHugoCenter.position.set(x, y, z);
    weightHugoCenter.rotateX(Math.PI/2);
    
    scene.add(weightHugoCenter);
}

function addWightCircle(x, y, z) {
    'use strict';
    
    wightHugoCircle = new THREE.Object3D();
    wightHugoCircle.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

    geometry = new THREE.TorusGeometry( 10, 2, 16, 20 );
    mesh = new THREE.Mesh(geometry, material);

    wightHugoCircle.add(mesh);
    wightHugoCircle.position.set(x, y, z);
    wightHugoCircle.rotateX(Math.PI/2);

    scene.add(wightHugoCircle);
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    scene.add(new THREE.AxisHelper(10));
    
    //createTable(0, 8, 0);
    //createBall(0, 0, 15);
    createBernardoBox(0, 0, 30);
    createBernardoTorus(0, 0, 30);
    createBernardoOctahedron(0, 0, 0);
    createHugoTorus(0, 30, 30);
    createHugoWheel(0, 30, 30);
    createHugoWeight(40, -20, 0);
    createBernardoCircle1(-20, 0, 0);
    createBernardoCircle2(20, 0, 0);
    createBernardoBar1(35, 0, 0);
    createBernardoBar2(-35, 0, 0);
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 50;
    camera.position.y = 90;
    camera.position.z = 70;
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
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 83:  //S
    case 115: //s
        bernardoBox.userData.jumping = !bernardoBox.userData.jumping;
        break;
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
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
    
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {

    if (bernardoOcta.userData.jumping) {
        bernardoOcta.userData.step += 0.04;
        bernardoOcta.position.x = 15 * (Math.sin(bernardoOcta.userData.step));
        bernardoOcta.position.y = 15 * (Math.cos(bernardoOcta.userData.step));
    }

    if (bernardoBar1.userData.jumping) {
        bernardoBar1.userData.step += 0.04;
        bernardoBar1.position.y = 15 * (Math.cos(bernardoBar1.userData.step));
    }
    
    if (bernardoBar2.userData.jumping) {
        bernardoBar2.userData.step += 0.04;
        bernardoBar2.position.y = 15 * (Math.cos(bernardoBar2.userData.step));
    }

    if (bernardoCircle1.userData.jumping){
        bernardoCircle1.userData.step += 0.04;
        bernardoCircle1.rotation.z += 0.1;
    }

    if (bernardoCircle2.userData.jumping){
        bernardoCircle2.userData.step += 0.04;
        bernardoCircle2.rotation.z += 0.1;
    }

    if (bernardoOcta.userData.jumping){
        bernardoOcta.userData.step += 0.04;
        bernardoOcta.rotation.y += 0.02;
    }

    if (bernardoBox.userData.jumping) {
        bernardoBox.userData.step += 0.04;
        bernardoBox.rotation.y += 0.02;
        bernardoBox.rotation.x += 0.02;
    }

    if (bernardoTorus.userData.jumping) {
        bernardoTorus.userData.step += 0.04;
        bernardoTorus.rotation.y += 0.05;
        bernardoTorus.rotation.x += 0.05;
    }

    

    if (HugoTorus.userData.jumping) {
        HugoTorus.userData.step += 0.04;

        HugoTorus.position.x = 30 * (Math.sin(HugoTorus.userData.step));
        HugoTorus.position.z = 30 * (Math.cos(HugoTorus.userData.step));

        HugoTorus.rotation.z -= 0.1;
        HugoTorus.rotation.y += 0.04;


    }

    if (wheelCenter.userData.jumping){
        wheelCenter.userData.step += 0.04;

        wheelCenter.position.x = 30 * (Math.sin(wheelCenter.userData.step));
        wheelCenter.position.z = 30 * (Math.cos(wheelCenter.userData.step));

        wheelCenter.rotation.z -= 0.1;
        wheelCenter.rotation.y += 0.04;
    }

    if (bernardoOcta.userData.jumping) {
        bernardoOcta.userData.step += 0.04;
        bernardoOcta.rotation.z += 0.02;
        bernardoOcta.rotation.x += 0.02;
    }

    if(wightHugoCircle.userData.jumping){

        wightHugoCircle.userData.step += 0.04;
        weightHugoCenter.userData.step += 0.04;
        weightHugoL.userData.step += 0.04;
        weightHugoR.userData.step += 0.04;

        wightHugoCircle.position.y = (30 * (Math.sin(wheelCenter.userData.step)));
        wightHugoCircle.rotation.z -= 0.1;
        wightHugoCircle.rotation.y += 0.04;
        wightHugoCircle.rotation.x += 0.2;

        weightHugoCenter.position.y = (30 * (Math.sin(wheelCenter.userData.step)));

        weightHugoL.position.y = (30 * (Math.sin(wheelCenter.userData.step)));
        weightHugoL.rotation.z -= 0.1;
        weightHugoL.rotation.y += 0.04;
        weightHugoL.rotation.x += 0.2;

        weightHugoR.position.y = (30 * (Math.sin(wheelCenter.userData.step)));
        weightHugoR.rotation.z -= 0.1;
        weightHugoR.rotation.y += 0.04;
        weightHugoR.rotation.x += 0.2;
    }

    render();
    
    requestAnimationFrame(animate);
}

