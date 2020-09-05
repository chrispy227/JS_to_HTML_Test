// Variables 
	// Main
	const myM = document.createElement('main');
	// Body
	const myB = document.querySelector('body');
	myB.style.fontSize = "10px";
	// NAV
	const myNav = document.createElement('nav');
	myNav.className = 'navbar';
		// SPAN
		const mySpan = document.createElement('span');
		mySpan.className = 'openslide';
			// SVG for Hamburger Button
			const myBtnContainer = document.createElement('a');
				myBtnContainer.setAttribute('href', '#');
				myBtnContainer.setAttribute('onclick', 'openSlideMenu()');
			const mySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			mySVG.setAttribute('width', '30');
			mySVG.setAttribute('height', '30');
			const myPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				myPath1.setAttribute('d', 'M0,5 30,5');
				myPath1.setAttribute('stroke', '#fff');
				myPath1.setAttribute('stroke-width', '5');
				mySVG.appendChild(myPath1);
			const myPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				myPath2.setAttribute('d', 'M0,14 30,14');
				myPath2.setAttribute('stroke', '#fff');
				myPath2.setAttribute('stroke-width', '5');
				mySVG.appendChild(myPath2);
			const myPath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				myPath3.setAttribute('d', 'M0,23 30,23');
				myPath3.setAttribute('stroke', '#fff');
				myPath3.setAttribute('stroke-width', '5');
				mySVG.appendChild(myPath3);
			// SVG END
				// NavBar List links
				// UL
				const myUl = document.createElement('ul');
					const myLiHome = document.createElement('li'); // Li
						const myAHome = document.createElement('a'); // Li a
						myAHome.setAttribute('href', '#');
						myAHome.innerHTML = 'Home';
					myLiHome.appendChild(myAHome);
				myUl.appendChild(myLiHome);
					const myLiAbout = document.createElement('li');
						const myAAbout = document.createElement('a');
						myAAbout.setAttribute('href', '#');
						myAAbout.innerHTML = 'About';
					myLiAbout.appendChild(myAAbout);
				myUl.appendChild(myLiAbout);
					const myLiServices = document.createElement('li');
						const myAServices = document.createElement('a');
						myAServices.setAttribute('href', '#');
						myAServices.innerHTML = 'Services';
					myLiServices.appendChild(myAServices);
				myUl.appendChild(myLiServices);
					const myLiContact = document.createElement('li');
						const myAContact = document.createElement('a');
						myAContact.setAttribute('href', '#');
						myAContact.innerHTML = 'Contact';
					myLiContact.appendChild(myAContact);
				myUl.appendChild(myLiContact);
				//NAV LINKS END
			// SPAN END
		// NAV END
	// SIDE-MENU DIV
	const sideMenu = document.createElement('div');
	sideMenu.className = 'side-nav';
	sideMenu.setAttribute('id', 'side-menu');
		const btnClose = document.createElement('a');
			btnClose.setAttribute('onclick', 'closeSlideMenu()');
			btnClose.innerHTML = '&times;';
			sideMenu.appendChild(btnClose);
		const sideHome = document.createElement('a');
			sideHome.setAttribute('href', '#');
			sideHome.innerHTML = 'Home';
			sideMenu.appendChild(sideHome);
		const sideAbout = document.createElement('a');
			sideAbout.setAttribute('href', '#');
			sideAbout.innerHTML = 'About';
			sideMenu.appendChild(sideAbout);
		const sideServices = document.createElement('a');
			sideServices.setAttribute('href', '#');
			sideServices.innerHTML = 'Services';
			sideMenu.appendChild(sideServices);
		const sideContact = document.createElement('a');
			sideContact.setAttribute('href', '#');
			sideContact.innerHTML = 'Contact';
			sideMenu.appendChild(sideContact);
	// SIDE-MENU DIV END
	// MAIN SECTION
	const sectionMain = document.createElement('section');
		sectionMain.setAttribute('id', 'main');
	const h1 = document.createElement('h1');
		h1.innerHTML = 'TEST TEXT';
	sectionMain.appendChild(h1);
// LARGE CONTENT ASSIGNMENTS

// SUB ELEMENT APPENDS
	// SPAN
	myBtnContainer.appendChild(mySVG);
	mySpan.appendChild(myBtnContainer);
	myNav.appendChild(mySpan);
	// UL
	myNav.appendChild(myUl);

// APPENDS TO DOM BODY
myB.appendChild(myM);
myM.appendChild(myNav);
myM.appendChild(sideMenu);
myM.appendChild(sectionMain);

// CSS STYLES AND ASSIGNMENTS
	// BODY
	const styleBody = {
		fontFamily: '"Arial", Serif',
		backgroundColor: '#f4f4f4',
		overflowX: 'hidden'
	};
	Object.assign(myB.style, styleBody);
	// NavBar
	const styleNav = {
		backgroundColor: '#3b5998',
		overflow: 'hidden',
		height: '63px'
	};
	Object.assign(myNav.style, styleNav);
	// Nav Links
	const styleLinks = {
		float: 'left',
		display: 'block',
		color: '#f2f2f2',
		textAlign: 'center',
		padding: '14px 16px',
		textDecoration: 'none',
		fontSize: '17px'
	};
	
	Object.assign(myBtnContainer.style, styleLinks);
	Object.assign(myAHome.style, styleLinks);
	Object.assign(myAAbout.style, styleLinks);
	Object.assign(myAServices.style, styleLinks);
	Object.assign(myAContact.style, styleLinks);

	// NAV UL
	const styleUL = {
		margin: '8px 0 0 0',
		listStyle: 'none'
	};
	Object.assign(myUl.style, styleUL);
	
	//sideMenu
	const styleSideMenu = {
		height: '100%',
		width: '0',
		position: 'fixed',
		zIndex: '1',
		top: '0',
		left: '0',
		backgroundColor: '#111',
		opacity: '0.9',
		overflowX: 'hidden', 
		paddingTop: '60px',
		transition: '0.5s'
	};
	Object.assign(sideMenu.style, styleSideMenu);
	
	//SideMenu CloseBtn
	const styleBtnClose = {
		position: 'absolute',
		top: '0',
		right: '22px',
		fontSize: '36px',
		marginLeft: '50px',
		padding: '10px 10px 10px 30px',
		textDecoration: 'none',
		color: '#ccc',
		display: 'block',
		transition: '0.3s'
	};
	Object.assign(btnClose.style, styleBtnClose);
	
	// SideMenu Links
	const styleSideA = {
		padding: '10px 10px 10px 30px', /* top r bottom l */
		textDecoration: 'none',
		fontSize: '22px',
		color: '#ccc',
		display: 'block',
		transition: '0.3s'
	}
	Object.assign(sideHome.style, styleSideA);
	Object.assign(sideAbout.style, styleSideA);
	Object.assign(sideServices.style, styleSideA);
	Object.assign(sideContact.style, styleSideA);
	
	//Section Main
	const styleSectionMain = {
		transition: 'margin-left 0.5s',
		padding: '20px',
		overflow: 'hidden',
		width: '100%'
	}
	Object.assign(sectionMain.style, styleSectionMain);
	
	// Hover Styles
	const styleMaster = document.createElement('style');
	styleMaster.innerHTML = `
		.navbar a:hover{
	background-color: #ddd;
	color: #000;
	}
	.side-nav a:hover{
	color: #fff;
	}
	`;
document.head.appendChild(styleMaster);
	
// FUNCTIONAL SCRIPTS
	// SLIDEMENU FUNCTIONALITY
	function openSlideMenu(){
			document.getElementById('side-menu').style.width = '250px';
			document.getElementById('main').style.marginLeft = '250px';
		}
		
		function closeSlideMenu(){
			document.getElementById('side-menu').style.width = '0px';
			document.getElementById('main').style.marginLeft = '0px';
		}