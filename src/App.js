import { useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import User from './components/user';

function App() {
	const [ click, setClick ] = useState(false);
	const [ data, setData ] = useState()
	return (
		<div className={`${click ? 'bg-bg-color-true' : 'bg-bg-color'} flex justify-center items-center font-SpaceMono`}>
			{console.log(click)}
			<div className="w-[375px] h-screen flex flex-col justify-center items-center md:w-[573px] lg:w-[730px]">
				<Header setClick={setClick} click={click} />
				<Search click={click} setData={setData} data={data}/>
				<User click={click} data={data}/>
			</div>
		</div>
	);
}

export default App;
