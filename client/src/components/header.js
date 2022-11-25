import React from 'react';

function Header({ setClick, click }) {
	const darkModeHandler = () => {
		if (click === true) {
			setClick(false);
		} else {
			setClick(true);
		}
	};
	return (
		<header className="flex w-full justify-between mb-[36px]">
			<h1 className={`${click ? 'text-white' : 'text-text-color-logo'} font-bold text-2xl`}>devfinder</h1>
			<div
				onClick={darkModeHandler}
				className={`${click ? 'text-white' : 'text-main-text-color'} flex items-center justify-center cursor-pointer`}
			>
				<h2 className="font-bold text-sm mr-4 space-x-0.5">{click ? 'LIGHT' : 'DARK'}</h2>
				<img src={`${click ? 'icons/icon-sun.svg' : 'icons/icon-moon.svg'}`} alt="dark-light-toogle" />
			</div>
		</header>
	);
}

export default Header;
