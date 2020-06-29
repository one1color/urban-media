function resizeParallaxCarpetContainer(){
	
    document.querySelector('.parallax-carpet-container').style.width = document.querySelector('.parallax-carpet-clip').offsetWidth + 'px'
	// document.querySelector('.parallax-carpet-container').forEach() = document.querySelector('.parallax-carpet-clip').offsetWidth + 'px';
}

window.addEventListener('resize', resizeParallaxCarpetContainer);
resizeParallaxCarpetContainer();
