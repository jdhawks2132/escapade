import { useFetch } from '../../hooks/useFetch';
import AdventureList from '../../components/AdventureList';

import './Adventures.css';

const Home = () => {
	const { data, isPending, error } = useFetch(
		'https://escape-backend-api.herokuapp.com/countries'
	);

	return (
		<div className='home'>
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading...</p>}
			{data && <AdventureList adventures={data} />}
		</div>
	);
};

export default Home;
