import s from './styles.module.css'
import banner from './img/pitbull_icon.svg'
import arrow from './img/arrow.svg'
import { Link } from 'react-router-dom'
import cn from 'classnames';
export const Hero = () => {
	return (
		<div className={s.banner}>
			<div className={cn("container", s.banner__container)}>
				<div className={s.left}>
					<h1 className={s.title}>Крафтовые лакомства для собак</h1>
					<p className={s.subtitle}>Всегда свежие лакомства ручной работы с доставкой по России и миру</p>
					<Link to="catalog" className={s.link}> Каталог <img src={arrow} alt="" /></Link>
				</div>
				<div className={s.right}>
					<img src={banner} alt="Заглавное изображение" />
				</div>
			</div>
		</div>
	)
}