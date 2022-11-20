import "./App.css";

import { Routes, Route } from 'react-router-dom';

import Layout from "./layout/Layout";
// import Hero from "./components/Hero/Hero";
// import Expectations from "./components/Expections/Expectations";
// import Skills from "./components/Skills/Skills";
// import Expirience from "./components/Expirience/Expirience";
// import Projects from "./components/Projects/Projects";
// import Contacts from "./components/Contacts/Contacts";
import Page404 from "./components/Page404.jsx/Page404";

// import img from './utils/img_imports'


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout/>}>
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
		
	);
}

export default App;





{/* <main> */}
{/* <header>
	<ul>
		<li>
			<a href="https://www.linkedin.com/in/denis-malniev-b9627b240/">
				<svg width="30" height="30">
					<use href="./img/symbol-defs.svg#icon-linkedin"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://telegram.org@denis_m03">
				<svg width="30" height="30">
					<use href="./img/symbol-defs.svg#icon-telegram"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://github.com/DenisMalv">
				<svg width="30" height="30">
					<use href="./img/symbol-defs.svg#icon-github"></use>
				</svg>
			</a>
		</li>
	</ul>
</header> */}
{/* <section className="hero">
	<h1>Hello! I’m Denis Malniev!</h1>
	<h3>Frontend (React.js) Developer</h3>
	<button type="button">Contact me</button>
	<button type="button">Download CV</button>
	<img src={img.denisHero} alt="" />
	<svg>
		<use></use>
	</svg>
</section> */}
{/* <section className="search">
	<h2>I’m looking for ..</h2>
	<ul>
		<li>
			<p>position:</p>
			<h4>Frontend Developer</h4>
		</li>
		<li>
			<p>work:</p>
			<h4>Remotely Full-time</h4>
		</li>
		<li>
			<p>salary:</p>
			<h4>$600+</h4>
		</li>
		<li>
			<p>work with:</p>
			<h4>JS, React, Redux, Node.js</h4>
		</li>
	</ul>
</section>
<section className="skills">
	<h2>Tech Skills</h2>
	<ul>
		<li>
			<div>
				<p>CSS3</p>
				<div>
					<svg width="42" height="60">
						<use href=""></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>SCSS/SASS</p>
				<div>
					<svg width="52" height="60">
						<use href="./img/symbol-defs.svg#icon-sass"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>HTML5</p>
				<div>
					<svg width="42" height="60">
						<use href="./img/symbol-defs.svg#icon-html5"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>Node.js</p>
				<div>
					<svg width="60" height="36">
						<use href="./img/symbol-defs.svg#icon-nodejs"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>React.js</p>
				<div>
					<svg width="59" height="53">
						<use href="./img/symbol-defs.svg#icon-react"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>JavaScript</p>
				<div>
					<svg width="60" height="60">
						<use href="./img/symbol-defs.svg#icon-js"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>WebPack</p>
				<div>
					<svg width="52" height="60">
						<use href="./img/symbol-defs.svg#webpack"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>Redux</p>
				<div>
					<svg width="60" height="57">
						<use href="./img/symbol-defs.svg#icon-redux"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>Git</p>
				<div>
					<svg width="60" height="60">
						<use href="./img/symbol-defs.svg#icon-git"></use>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div>
				<p>Parcel</p>
				<div>
					<svg width="56" height="29">
						<use href="./img/symbol-defs.svg#icon-parcel"></use>
					</svg>
				</div>
			</div>
		</li>
	</ul>
	<h2>Soft Skills</h2>
	<ul>
		<li>Hardworking</li>
		<li>Honest</li>
		<li>Accurate</li>
		<li>Willingness to learn</li>
		<li>Critical thinking</li>
		<li>Quick learning</li>
		<li>Time management and organization</li>
	</ul>
	<h2>Languages</h2>
	<ul>
		<li>Ukrainian</li>
		<li>Russian</li>
		<li>English</li>
	</ul>
	<svg>
		<use href="./img/symbol-defs.svg#icon-Vector-2"></use>
	</svg>
</section>
<section className="experience">
	<h2>Work Experience</h2>
	<ul>
		<li>
			<p>CGP Systems sro</p>
			<h4>Front-end Developer (React)</h4>
			<p>July 2022 - November 2022 | Ukraine</p>
		</li>
		<li>
			<h4>Mentor, in GoIT</h4>
			<p>Checking the correctness of code</p>
			<p>July 2022 - up to now | Ukraine</p>
		</li>
		<li>
			<p>Worker, McDonalds Ukraine LTD</p>
			<h4>Training Instructor</h4>
			<p>May 2016 - up to now | Ukraine</p>
		</li>
	</ul>
	<h2>Study Experience</h2>
	<ul>
		<li>
			<p>GoIT</p>
			<h4>Full Stack developer</h4>
			<p>March 2021 - July 2022 | Ukraine</p>
		</li>
		<li>
			<p>Kryvyi Rih National University</p>
			<h4>Mining Faculty, Magister of mining</h4>
			<p>September 2010 - June 2015 | Ukraine</p>
		</li>
	</ul>
</section>
<section className="projects">
	<h2>Projects</h2>
	<ul>
		<li>
			<img src="./img/project-wallet.jpg" alt="" />
			<a href="">Project WALLET github</a>
			<p>
				[React / Redux / REST.API / Node.js] Group
				project. Wallet for for counting expenses.
			</p>
		</li>
		<li>
			<img src="./img/project-finder.jpg" alt="" />
			<a href="">Image Finder github</a>
			<p>
				[JavaScript / HTML5 / CSS3] Individual project.
				Working whith REST API Pixabay.
			</p>
		</li>
		<li>
			<img src="./img/project-filmoteka.jpg" alt="" />
			<a href="">Film library github</a>
			<p>
				[JavaScript / HTML5 / CSS3] Group project.
				Two-page film library website. Role
				web-developer. Implemented, REST API work,
				custom pagination.
			</p>
		</li>
		<li>
			<img src="./img/project-courses.jpg" alt="" />
			<h4>HellEN github</h4>
			<p>
				[HTML5 / CSS3 / SCSS] Group project, about
				English language courses. Role of the team
				leader.
			</p>
		</li>
	</ul>
</section>
<section className="contact">
	<h2>Contacts</h2>
	<a href="tel:+380984733446">380984733446</a>
	<a href="mailto:denis.malniev@gmail.com">
		denis.malniev@gmail.com
	</a>
	<ul>
		<li>
			<a href="">
				<svg>
					<use href="./img/symbol-defs.svg#icon-linkedin"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="">
				<svg>
					<use href="./img/symbol-defs.svg#icon-telegram"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="">
				<svg>
					<use href="./img/symbol-defs.svg#icon-github"></use>
				</svg>
			</a>
		</li>
	</ul>
	<button type="button">Contact me</button>
	<img src="./img/denis-contacts.jpg" alt="" />
	<img src="" alt="" />
</section> */}
// </main>
// <footer></footer>