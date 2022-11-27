import React, { useState } from 'react';
import { axiosBaseUrl } from '../config';

function Search({ click, setData }) {
	const [ user, setUser ] = useState('');
	const [ show, setShow ] = useState(false);
	const inputHandler = (e) => {
		setUser(e.target.value.trim());
		e.preventDefault();
	};
	const searchHandler = (e) => {
		console.log(user);
		if (user.length === 0) {
			alert('You need to type username');
		} else {
			axiosBaseUrl
				.get(`/${user}`)
				.then((response) => {
					if (response.data.name !== 'AxiosError') {
						setData(response);
						setShow(false);
					} else {
						setShow(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
		//setUser('');
		e.preventDefault();
	};
	return (
		<div
			role="search"
			className={`${click
				? 'bg-bg-color-center-true'
				: 'bg-white'} flex justify-between items-center w-full pt-[6.5px] pr-[7px] pb-[7.5px] pl-[16px] rounded-2xl shadow-md`}
		>
			<svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
					fill="#0079ff"
				/>
			</svg>
			<input
				value={user}
				onChange={inputHandler}
				placeholder="Search GitHub username..."
				type="text"
				className={`${click
					? 'placeholder:text-white && text-white'
					: 'placeholder:text-main-text-color && text-main-text-color'} outline-none placeholder:text-xs w-[184px]  md:placeholder:text-lg bg-transparent ml-[8.95px] md:ml-6 flex-grow text-xs md:text-base`}
			/>

			<h2
				className={`${show === true
					? 'inline' && 'text-red-500 md:mr-[24px] mr-[15px] ml-[15px] text-xs md:text-sm font-bold'
					: 'hidden'}`}
			>
				No results
			</h2>

			<button
				onClick={searchHandler}
				type="submit"
				className="pt-[12.5px] pb-[13.5px] pl-[18px] pr-[14px] bg-bg-button text-white rounded-lg font-bold text-sm md:text-lg hover:bg-bg-button-hover"
			>
				Search
			</button>
		</div>
	);
}

export default Search;
