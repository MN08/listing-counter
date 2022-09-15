import Style from './Container.module.css';
import PropTypes from 'prop-types';

const Container = (props) => {
    return(
        <section className={Style.container}>
            {props.children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;