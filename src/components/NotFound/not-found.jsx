import React from "react";
import { Button } from '../Button/button';
import {ReactComponent as NotFoundIcon} from './image/ic-notfound.svg';
import s from './styles.module.css'

export function NotFound({ children, title, buttonText = "На главную", buttonAction }) {
	return (
			<div className={s.notFound} >
				<NotFoundIcon className={s.image} aria-hidden="true" />
				<h1 className={s.title}>{title}</h1>
				{children && children}
				{buttonAction
					? <Button type="border" href="#" action={buttonAction}>{buttonText}</Button>
					: <Button type="border" href='/'>{buttonText} </Button>
				}
			</div>
	)

}