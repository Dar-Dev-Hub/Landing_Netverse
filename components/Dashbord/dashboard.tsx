"use client";
import { Children, useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";


import { IoIosHome } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logout } from "../Services/authService";
import router from "next/router";
const Dashbordc = ({ children }) => {
	const [sideBar, setSideBar] = useState(false);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	const handleLogout = (): void => {
		logout();
		router.push("/");
	}
	return (

		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar}>
								<BsArrowRight />
							</button>

							<img className="mr-10" src="/images/logo/netVerse.svg" alt="Eu" />

							{/* Links principais do app */}
							<ul>
								<a href="/dashbord" title="Home">
									<IoIosHome />
								</a>
								<a href="/profilepage" title="Home">
									<FaUserGear />
								</a>
								<a href="/network" title="Home">
									<BiNetworkChart />
								</a>

							</ul>
						</nav>
						<div>
							{/* Icones que pode não ser tão principais no app */}
							<ul>

								<button
									onClick={handleLogout}
								>
									<a href="/">
										<RiLogoutCircleRLine />
	
									</a>
								</button>
							</ul>


						</div>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
								<div className="mr-10">
									<img src="/images/logo/netVerse.svg" alt="Eu" />
									<h1>Neteverse</h1>
								</div>

								{/* Icones principais do app */}
								<ul>
									<a href="/dashbord" title="Home">
										<IoIosHome />
										<p>Home</p>
									</a>
									<a href="/profilepage" title="Home">
										<FaUserGear />
										<p>User Profile</p>
									</a>
									<a href="/network" title="network">
										<BiNetworkChart />
										<p>Network</p>
									</a>

								</ul>
							</nav>
							<div>
								{/* Icones que pode não ser tão principais no app */}
								<ul>
									<button
										onClick={handleLogout}
									>
										<a href="/">
											<RiLogoutCircleRLine />
											<p>Logout</p>
										</a>
									</button>
								</ul>


							</div>
						</section>
					</OpenSideBar>
				)}
				{children}
			</Content>

		</Container>


	);
};

export default Dashbordc;