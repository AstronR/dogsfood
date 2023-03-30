import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { NotFound } from '../NotFound/not-found';
import Card from '../Card/card';
import './styles.css';


const CardList = ({ cards }) => {
	const navigate = useNavigate();
	const { isLoading } = useContext(UserContext);

	return (

		<>
			{!cards.length && !isLoading && <NotFound buttonText="Назад" title="Извините, по вашему запросу ничего не найдено" buttonAction={() => navigate(-1)} />}
			<div className="cards">
				{cards.map((item) => <Card key={item._id} {...item} />)}
			</div>
		</>
	);
};

export default CardList;

