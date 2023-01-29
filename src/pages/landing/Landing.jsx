import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Popup from 'reactjs-popup';
// import Login from './Login';
// import LoginHooks from './LoginHooks';
import * as Components from './Components';
import './css/landing.css';
import './css/features.css';
import './css/navbar.css';
import './css/login.css';
import './css/signup.css';
import anima from '../../Images/anima.png';
import improve from '../../Images/improve.png';
import lecture from '../../Images/lecture.jpg';
import proctor1 from '../../Images/proctor1.jpg';
import logo from '../../Images/logo-no-background.png'
import { useNavigate } from 'react-router-dom';
// import authService from '../../services/auth.service';
const featureList = [
	'Face Verification',
	'Multiple People Detection',
	'Voice Detection',
	'Devtools Check',
	'Full Screen Check',
	'Multiple Tabs Check'
];

//STUDENT TYPE 2
//INSTITUTE TYPE 1
const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<li class="nav-link dropdown"><a href="" class="dropdown-landing">Contact<i
				class="bi bi-chevron-compact-down"></i></a>
				<ul class="dropdown-list">
					<li class="nav-link">
						<a href="mailto:cod.callofduty@gmail.com" target="_blank">&nbsp;&nbsp;E-Mail</a>
						<li class="nav-link">
							<a href="">Phone</a>
						</li>
					</li>
				</ul>
			</li>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo-landing">
				<img src={logo}></img>
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

const Landing = () => {
	const [signIn, toggle] = React.useState(true);
	const navigate = useNavigate();

	const signInFunc = (e) => {
		e.preventDefault();
		const senddata = {

			"UserName": username,
			"Password": password,

		}
		console.log(senddata);

		axios
			.post('http://lmsapiv01.azurewebsites.net/login', senddata)
			.then((response) => {
				if (response.data.token) {
					console.log(response.data)
					localStorage.setItem("login", JSON.stringify(response.data));
					// if (type == 2) {
					// 	navigate("/dashboard");
						window.location.reload();
					// }
					// else {
					// 	navigate("/institute");
					// 	window.location.reload();
					// }
				}

				return response.data;
			});
	}

	const signUpFunc = (e) => {
		e.preventDefault();
		if (password == confpassword) {
			const sendData = {
				"UserName": username,
				"Password": password,
				"FirstName": firstname,
				"LastName": lastname,
				"EmailId": email,
				"MobileNo": parseInt(mobile),
				// "LastLoginDateTime": "2022-11-27T00:00:00.000Z",
				"DateOfBirth": "1974-07-13T00:00:00.000Z",
				"Age": 26,
				"TypeId": String(parseInt(type)),
				// "ActivationStatus": '0',
				"Photo": "https://www.nicepng.com/maxp/u2q8i1a9e6i1o0o0/"
			};

			console.log(sendData);

			axios
				.post('http://lmsapiv01.azurewebsites.net/signup', sendData)
				.then((response) => {
					if (response.data.accessToken) {
						console.log(response.data)
						localStorage.setItem("login", JSON.stringify(response.data));
					}
					return response.data;
				});

		}
		else {
			setConfirm(1);
		}
	}

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confpassword, setConfPassword] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [type, setType] = useState("2");
	const [confirm, setConfirm] = useState(0);
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type-landing-page">

				<div className="section-fluid-main">
					<div className="section-row">
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={anima} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Animation filled User Interface</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={improve} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Improve by strengthening your weak topics</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={lecture} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Online Lectures and frequent doubt solving with the best faculty</h2>
						</div>
						<div className="section-col">
							<div className='section'>
								<div className="image">
									<img src={proctor1} alt="" />
								</div>
							</div>
						</div>
						<div class="hover-text">
							<h2>Active invigilation by Proctoring Software</h2>
						</div>
					</div>
				</div>
				<Components.Container>
					<Components.SignUpContainer signinIn={signIn}>
						<Components.Form onSubmit={signUpFunc}>
							<Components.Title>Create Account</Components.Title>
							<Components.Input type='text' placeholder='First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
							<Components.Input type='text' placeholder='Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)} required />
							<Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
							<Components.Input type='number' placeholder='Mobile No.' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
							<Components.Input type='text' placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} required />

							<Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
							<Components.Input type='password' placeholder='Confirm Password' value={confpassword} onChange={(e) => setConfPassword(e.target.value)} required />
							<div class="selector">
								<div class="selector-item">
									<input type="radio" id="radio1" name="selector" value="2" class="selector-item_radio" onClick={(e) => setType(e.target.value)} />
									<label for="radio1" class="selector-item_label">Student</label>
								</div>
								<div class="selector-item">
									<input type="radio" id="radio2" name="selector" value="1" class="selector-item_radio" onClick={(e) => setType(e.target.value)} />
									<label for="radio2" class="selector-item_label">Institute</label>
								</div>
							</div>
							<Components.Button type="submit" >Sign Up</Components.Button>
						</Components.Form>
					</Components.SignUpContainer>

					<Components.SignInContainer signinIn={signIn}>
						<Components.Form onSubmit={signInFunc}>
							<Components.Title>Sign in</Components.Title>
							<Components.Input type='text' placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} required />
							<Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
							<div class="selector1">
								<div class="selector-item1">
									<input type="radio" id="radio3" name="selector" value="2" class="selector-item_radio1" onClick={(e) => setType(e.target.value)} />
									<label for="radio3" class="selector-item_label1">Student</label>
								</div>
								<div class="selector-item1">
									<input type="radio" id="radio4" name="selector" value="1" class="selector-item_radio1" onClick={(e) => setType(e.target.value)} />
									<label for="radio4" class="selector-item_label1">Institute</label>
								</div>
							</div>
							<Components.Button type="submit">Sign In</Components.Button>
						</Components.Form>
					</Components.SignInContainer>

					<Components.OverlayContainer signinIn={signIn}>
						<Components.Overlay signinIn={signIn}>

							<Components.LeftOverlayPanel signinIn={signIn}>
								<Components.Title>Welcome Back!</Components.Title>
								<Components.Paragraph>
									To keep connected with us please login with your personal info
								</Components.Paragraph>
								<Components.GhostButton onClick={() => toggle(true)} >
									Sign In
								</Components.GhostButton>
							</Components.LeftOverlayPanel>

							<Components.RightOverlayPanel signinIn={signIn}>
								<Components.Title>Hello!</Components.Title>
								<Components.Paragraph>
									Enter Your personal details and start journey with us
								</Components.Paragraph>
								<Components.GhostButton onClick={() => toggle(false)}>
									Sign Up
								</Components.GhostButton>
							</Components.RightOverlayPanel>

						</Components.Overlay>
					</Components.OverlayContainer>

				</Components.Container>
			</div>

			<footer className="Footer">Copyright © 2022 All rights reserved.</footer>
		</React.Fragment>

	);
};

export default Landing;