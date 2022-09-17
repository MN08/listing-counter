import PropTypes from 'prop-types'
import Style from './Info.module.css';

const Info = ({todosLength, totalCount, onDelete}) =>{
    return(
        <div className={Style.info}>
          <div className={Style.infoTotal}>
            <p>{`Total List : ${todosLength}`}</p>
          </div>

          <div className={Style.infoTotal}>
            <p>{`Total Count : ${totalCount}`}</p>
          </div>

          <button onClick={onDelete} className={Style.deleteAllButton}>Delete All List</button>
        </div>
    )
}

Info.propTypes = {
 todosLength : PropTypes.number,
 totalCount: PropTypes.func,
 onDelete: PropTypes.func
}

export default Info