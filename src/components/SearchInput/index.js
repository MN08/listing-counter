import Style from './SearchInput.module.css'
import PropTypes from 'prop-types';


const SearchInput = (props) => {
    return(
         <form className={Style.form} onSubmit={props.handleInputSubmit}>
          <input className={Style.input} type='text' placeholder='Input List'
            onChange = {props.onChange}
            value = {props.value}
          />
          <button className={Style.addButton} type='submit'>Add</button>
        </form>
    )
}

SearchInput.propTypes = {
    handleInputSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default SearchInput