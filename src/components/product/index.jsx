import cn from 'classnames'; 
import { calcDiscountPrice, isLiked } from '../../utils/products';
import { Button } from '../button';
import s from './styles.module.css';
import { ReactComponent as LikeIcon } from "../../images/save.svg"

function Product({ name, pictures, discount, price, likes = [], currentUser = {}}) {
    const discount_price = calcDiscountPrice(price, discount);   
    const like = isLiked(likes, currentUser?._id)

    return ( 
        <>
            <div className={s.header}>
                <a href="#" className='button-back'>Назад</a>
                <h1 className={s.productTitle}>{name}</h1>
                <p className={s.articul}>Артикул: <b>2388905</b></p>
            </div>
            <div className={s.product}>
                <div className={s.imgWrapper}>
                    <img src={pictures} alt={`Изображение ${name}`} />
                </div>
                <div className={s.desc}>
                    {discount !== 0 ? (
                        <>
                        <span className={s.oldPrice}>{price}&nbsp;₽</span>
                        <span className={cn(s.price, s.price_discount)}>
                            {discount_price}&nbsp;₽
                        </span>
                        </>
                    ) : (
                        <span className={s.price}>{price}&nbsp;₽</span>
                    )}

                    <div className={s.btnWrap}>
                        <div className={s.left}>
                            <button className={s.minus}>-</button>
                            <span className={s.num}>0</span>
                            <button className={s.plus}>+</button>
                        </div>
                        <Button href="#" type="primary">В корзину</Button>  
                    </div>
                    <button className={cn()}>
                        <LikeIcon />
                        {like ? 'В избранном' : 'В избранное'}
                    </button>
                </div>
            </div>
        </>    
     );
}

export default Product;