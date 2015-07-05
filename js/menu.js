// movie object constructor
		//function Media(imageUrl) {
		//(name, imageUrl, previewURL, streamURL, description, MPAARating, starRating, releaseDate, genre, runTime) 
			//this.name = name;
			//this.imageURL = imageURL;
			// this.previewURL = previewURL;
			// this.streamURL = streamURL;
			// this.description = description;
			// this.MPAARating = MPAARating;
			// this.starRating = starRating;
			// this.releaseDate = releaseDate;
			// this.genre = genre;
			// this.runTime = runTime;
		//}


// constructor for each movie
function Media(name, boxCover) {
	this.name = name;
	this.boxCover = boxCover;
};

		// favorite, watchlist & history default as false

		// Media.prototype.favorite = false;
		// Media.prototype.watchList = false;
		// Media.prototype.history = false;


// create movie objects
var avengers = new Media("avengers",'assets/boxcovers/avengers.jpg');
var blade_runner = new Media("blade_runner",'assets/boxcovers/blade_runner.jpg');
var brave = new Media("brave",'assets/boxcovers/brave.jpg');
var catching_fire = new Media("catching_fire",'assets/boxcovers/catching_fire.jpg');
var django = new Media("django",'assets/boxcovers/django.jpg');
var finding_nemo = new Media("finding_nemo",'assets/boxcovers/finding_nemo.jpg');
var hobbit = new Media("hobbit",'assets/boxcovers/hobbit.jpg');
var hotel_transylvania = new Media("hotel_transylvania",'assets/boxcovers/hotel_transylvania.jpg');
var hugo = new Media("hugo",'assets/boxcovers/hugo.jpg');
var iron_man = new Media("iron_man",'assets/boxcovers/iron_man.jpg');
var les_mis =  new Media("les_mis",'assets/boxcovers/les_mis.jpg');


// put movie objects into table
var table = [avengers,blade_runner,brave,catching_fire,django,finding_nemo,hobbit,hotel_transylvania,hugo,iron_man,les_mis];



// INTRO ANIMATION
var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: []};

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();

				for (var i = 0; i < table.length; i++) {

					var element = document.createElement( 'div' );
					element.className = 'element';
					element.id = table[i].name;
					//element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					var image = document.createElement('img');
					image.src = table[i].boxCover;
					element.appendChild(image);

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//

					var object = new THREE.Object3D();
					// object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
					// object.position.y = - ( table[ i + 4 ] * 180 ) + 990;


var home = document.getElementsByClassName("selections");
home[0].appendChild(element);
console.log(element);



					targets.table.push( object );

				}

				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				// controls = new THREE.TrackballControls( camera, renderer.domElement );
				// controls.rotateSpeed = 0.5;
				// controls.minDistance = 500;
				// controls.maxDistance = 6000;
				// controls.addEventListener( 'change', render );

				// var button = document.getElementById( 'table' );
				// button.addEventListener( 'click', function ( event ) {

				// 	transform( targets.table, 2000 );

				// }, false );


transform( targets.table, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
					.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
					.easing( TWEEN.Easing.Exponential.InOut )
					.start();

					new TWEEN.Tween( object.rotation )
					.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
					.easing( TWEEN.Easing.Exponential.InOut )
					.start();

				}

				new TWEEN.Tween( this )
				.to( {}, duration * 2 )
				.onUpdate( render )
				.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				//controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}

// BUILDING MENUS

// var elements = document.getElementsByClassName("element");
// console.log(elements);

// for (var j = 0; j < elements.length; j++) {
// 	document.getElementsByClassName("selections")[0].appendChild(elements[j]);
// }


