import './styles.css';
import s from './styles.module.css';


function Form({ title, handleFormSubmit, children }) {

	return(
		<form className = {s.form} onSubmit = { handleFormSubmit} >
			<h1 className={s.title}>{title}</h1>

         {children}

</form >
	
	
)

}
export default Form;