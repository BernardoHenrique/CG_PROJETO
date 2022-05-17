/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

var bernardoBox, bernardoTorus, bernardoOcta, bernardoCircle1, bernardoCircle2, bernardoBar1, bernardoBar2;

var HugoTorus, HugoTorus2, HugoTorus3, wheelCenter, weightHugoL, weightHugoR, weightHugoCenter, wightHugoCircle;

var tableArt, torusArt, ballArt, Art, obj2, obj3;

var ball, triangle1, triangle2;

function createGrandParent(x, y, z){
    'use strict';

    tableArt = new THREE.Object3D();
    tableArt.userData = { jumping: false, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x4c4cce, wireframe: true});
    geometry = new THREE.BoxGeometry(30, 6, 20, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    tableArt.add(mesh);
    tableArt.position.set(x, y, x);

    createFather(tableArt, x, y, z);
    
    scene.add(tableArt);
}

function createFather(obj, x, y, z){
    'use strict';
    
    material = new THREE.MeshBasicMaterial({ color: 0x1e1e51, wireframe: true});
    geometry = new THREE.CylinderGeometry(3, 1, 20, 3, 2, 3);
    obj2 = new THREE.Mesh(geometry, material);
    obj2.position.set(0, 13, 0);

    createChild(obj2, x, y, z);
    
    obj.add(obj2);
}

function createChild(obj, x, y, z){
    'use strict';

    material = new THREE.MeshBasicMaterial({ color: 0x53536c, wireframe: true});
    geometry = new THREE.SphereGeometry(6, 10, 10);
    obj3 = new THREE.Mesh(geometry, material);
    obj3.position.set(0, 15, 0);
    
    obj.add(obj3);
}

function createGoncaloBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xcf3a38, wireframe: false });
    geometry = new THREE.TorusGeometry(15,3,4,4);
    mesh = new THREE.Mesh(geometry, material);

    ball.add(mesh);
    ball.position.set(x, y, z);
    ball.rotateZ(Math.PI/4);
    
    scene.add(ball);
}


function createGoncaloTriangle1(x, y, z) {
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

function createGoncaloTriangle2(x, y, z) {
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
function createBernardoBox(x, y, z) {
    'use strict';
    
    bernardoBox = new THREE.Object3D();
    bernardoBox.userData = { jumping: true, step: 0 };

    /*var cubeMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x99ffff, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x3333ff, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x09ff8d, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x67e58d, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0xf284ea, wireframe: false, side: THREE.Frontside }),
        new THREE.MeshBasicMaterial({ color: 0x9e739b, wireframe: false, side: THREE.Frontside }),
    ];*/
    
    material = new THREE.MeshBasicMaterial({ color: 0x9e739b, wireframe: false }),
    /*material = new THREE.MeshFaceMaterial(cubeMaterials);*/
    geometry = new THREE.CubeGeometry(7.5, 7.5, 7.5, 1, 1, 1);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoBox.add(mesh);
    bernardoBox.position.set(x, y, z);
    
    scene.add(bernardoBox);
}


function createBernardoTorus(x, y, z) {
    'use strict';
    
    bernardoTorus = new THREE.Object3D();
    bernardoTorus.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0x324f3a, wireframe: false });
    geometry = new THREE.TorusGeometry(9.5, 2, 16, 1000, 360);
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoTorus.add(mesh);
    bernardoTorus.position.set(x, y, z);
    
    scene.add(bernardoTorus);
}

function createBernardoOctahedron(x, y, z){
    'use strict';
    
    bernardoOcta = new THREE.Object3D();
    bernardoOcta.userData = { jumping: true, step: 0 };
    
    geometry = new THREE.OctahedronGeometry(8.5, 0);
    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false }),
    mesh = new THREE.Mesh(geometry, material);
    
    bernardoOcta.add(mesh);
    bernardoOcta.position.set(x, y, z);
    
    scene.add(bernardoOcta);
}

function createBernardoCircle1(x, y, z){
    bernardoCircle1 = new THREE.Object3D();
    bernardoCircle1.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xFF0023, wireframe: false });
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
    
    material = new THREE.MeshBasicMaterial({ color: 0x32fa6e, wireframe: false });
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
    
    material = new THREE.MeshBasicMaterial({ color: 0xfcff4f, wireframe: false });
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

    material = new THREE.MeshBasicMaterial({ color: 0xc0c0c0, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/3);
    mesh = new THREE.Mesh(geometry, material);

    HugoTorus.add(mesh);
    HugoTorus.position.set(x, y, z);

    scene.add(HugoTorus);
}

function createHugoTorus2(x, y, z) {
    'use strict';
    
    HugoTorus2 = new THREE.Object3D();
    HugoTorus2.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0xA0A0A0, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/4);
    mesh = new THREE.Mesh(geometry, material);

    HugoTorus2.add(mesh);
    HugoTorus2.position.set(x, y, z);
    HugoTorus2.rotateZ((Math.PI/3)*2)
    scene.add(HugoTorus2);
}

function createHugoTorus3(x, y, z) {
    'use strict';
    
    HugoTorus3 = new THREE.Object3D();
    HugoTorus3.userData = { jumping: true, step: 0};

    material = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: false });

    geometry = new THREE.TorusGeometry(10, 3, 4, 200, Math.PI/5);
    mesh = new THREE.Mesh(geometry, material);

    HugoTorus3.add(mesh);
    HugoTorus3.position.set(x, y, z);
    HugoTorus3.rotateZ((Math.PI/3)*4);

    scene.add(HugoTorus3);
}

function createHugoWheel(x, y, z) {
    'use strict';
    
    wheelCenter = new THREE.Object3D();
    wheelCenter.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });

    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);

    wheelCenter.add(mesh);
    wheelCenter.position.set(x, y, z);
    
    scene.add(wheelCenter);
}


function addWeightLeft(x, y, z){
    'use strict';
    
    weightHugoL = new THREE.Object3D();
    weightHugoL.userData = { jumping: true, step: 0 };

    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

    geometry = new THREE.SphereGeometry(3, 20, 20);
    mesh = new THREE.Mesh(geometry, material);

    weightHugoL.add(mesh);
    weightHugoL.position.set(x, y, z);
    
    scene.add(weightHugoL);
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    

    //scene.add(new THREE.AxisHelper(10));
    
    createBernardoBox(60, 20, 30);
    createBernardoTorus(60, 20, 30);
    createBernardoOctahedron(0, 0, 0);
    createHugoTorus(60, -20, -100);
    createHugoTorus2(60, -20, -100);
    createHugoTorus3(60, -20, -100);
    createHugoWheel(60, -20, -100);
    createBernardoCircle1(-22, 0, 0);
    createBernardoCircle2(22, 0, 0);
    createBernardoBar1(32, 0, 0);
    createBernardoBar2(-32, 0, 0);
    createGoncaloBall(-80, 25, 0);
    createGoncaloTriangle1(-83.25, 34,0);
    createGoncaloTriangle2(-76.75, 16,0);
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
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
    case 49:
        camera.position.x = 0;
        camera.position.y = -5;
        camera.position.z = 110;
        camera.lookAt(scene.position);
        break;
    case 50:
        camera.position.x = 0;
        camera.position.y = 130;
        camera.position.z = 0;
        camera.lookAt(scene.position);
        break;
    case 51:
        camera.position.x = 120;
        camera.position.y = 0;
        camera.position.z = 0;
        camera.lookAt(scene.position);
        break;
    case 52: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 88: //z
        tableArt.userData.jumping = true;
        break;
    case 90: //x
        tableArt.userData.jumping = false;
        break;
    case 37: //left
        tableArt.position.x -= 1;
        break;
    case 38: //up
        tableArt.position.y += 1;
        break;
    case 39: //right
        tableArt.position.x += 1;
        break;
    case 40: //down
        tableArt.position.y -= 1;
        break;
    case 67:
    case 68:
        tableArt.position.x = 40;
        tableArt.position.y = -20;
        tableArt.position.z = 30;
        tableArt.rotation.z = 0;
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

    /*if (HugoTorus.userData.jumping) {
        HugoTorus.userData.step += 0.02;

        HugoTorus.position.x = 65 * (Math.sin(HugoTorus.userData.step));
        HugoTorus.position.z = 65 * (Math.cos(HugoTorus.userData.step));

        HugoTorus.rotation.z -= 0.1;
        HugoTorus.rotation.y += 0.04;

        if (HugoTorus.position.x < 0){
            HugoTorus.color = 0xfcff4f;
        }


    }

    if (HugoTorus2.userData.jumping) {
        HugoTorus2.userData.step += 0.02;

        HugoTorus2.position.x = 65 * (Math.sin(HugoTorus2.userData.step));
        HugoTorus2.position.z = 65 * (Math.cos(HugoTorus2.userData.step));

        HugoTorus2.rotation.z -= 0.1;
        HugoTorus2.rotation.y += 0.04;


    }

    if (HugoTorus3.userData.jumping) {
        HugoTorus3.userData.step += 0.02;

        HugoTorus3.position.x = 65 * (Math.sin(HugoTorus3.userData.step));
        HugoTorus3.position.z = 65 * (Math.cos(HugoTorus3.userData.step));

        HugoTorus3.rotation.z -= 0.1;
        HugoTorus3.rotation.y += 0.04;


    }

    if (wheelCenter.userData.jumping){
        wheelCenter.userData.step += 0.02;

        wheelCenter.position.x = 65 * (Math.sin(wheelCenter.userData.step));
        wheelCenter.position.z = 65 * (Math.cos(wheelCenter.userData.step));

        wheelCenter.rotation.z -= 0.1;
        wheelCenter.rotation.y += 0.04;
    }*/

    if (bernardoOcta.userData.jumping) {
        bernardoOcta.userData.step += 0.04;
        bernardoOcta.rotation.z += 0.02;
        bernardoOcta.rotation.x += 0.02;
    }

    if(HugoTorus.userData.jumping){

        HugoTorus.userData.step += 0.04;
        HugoTorus2.userData.step += 0.04;
        HugoTorus3.userData.step += 0.04;
        wheelCenter.userData.step += 0.04;

        HugoTorus.position.y = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus.position.z = (50 * (Math.cos(wheelCenter.userData.step)));
        HugoTorus.position.x = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus.rotation.z -= 0.1;
        HugoTorus.rotation.y += 0.04;
        HugoTorus.rotation.x += 0.2;

        wheelCenter.position.y = (50 * (Math.sin(wheelCenter.userData.step)));
        wheelCenter.position.z = (50 * (Math.cos(wheelCenter.userData.step)));
        wheelCenter.position.x = (50 * (Math.sin(wheelCenter.userData.step)));

        HugoTorus2.position.y = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus2.position.z = (50 * (Math.cos(wheelCenter.userData.step)));
        HugoTorus2.position.x = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus2.rotation.z -= 0.1;
        HugoTorus2.rotation.y += 0.04;
        HugoTorus2.rotation.x += 0.2;

        HugoTorus3.position.y = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus3.position.z = (50 * (Math.cos(wheelCenter.userData.step)));
        HugoTorus3.position.x = (50 * (Math.sin(wheelCenter.userData.step)));
        HugoTorus3.rotation.z -= 0.1;
        HugoTorus3.rotation.y += 0.04;
        HugoTorus3.rotation.x += 0.2;
    }

    if (triangle1.userData.jumping) {
        triangle1.rotation.z += 0.05
        triangle2.rotation.z += 0.05
        triangle1.rotation.y -= 0.05
        triangle2.rotation.y -= 0.05
        ball.rotation.y -= 0.05
    }

    if (tableArt.userData.jumping){
        tableArt.userData.step += 0.04;

        tableArt.rotation.z += 0.1;
    }


    render();
    
    requestAnimationFrame(animate);
}

