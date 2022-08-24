import logo from './assets/logo.png';

export default function App() {
	return (
		<div>
			<div className='section'>
				<div>
					<img src={logo} alt='logo' id='logo' />
					<h1>Part Time Gamer</h1>
				</div>
				<div>
					<div className='container'>
						<p>
							Welcome to Part Time Gamer's portfolio.
						</p>
						<a href="https://linktr.ee/parttimegamer" target="_blank">
							Get our social media links
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
