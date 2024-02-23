import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import { getRandomColor } from './gerRandomColor';

const StatisticIteam =({id,label,percentage})=>{
    return(

    <li key={id}
    style={{ backgroundColor: getRandomColor() }}>
    <span>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
    )
}

StatisticIteam.propTypes ={
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
export default StatisticIteam;