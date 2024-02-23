import PropTypes from 'prop-types';
import css from "./Statistics.module.css"
import StatisticIteam from "./StatisticIteam";


const Statistics =({title,stats})=>{
    
return (
    <section className={css.statistics}>
        {title? <h2 className={css.title}>{title}</h2> :<></>}
    
  
    <ul className={css.statList}>

    {stats.map(stat => (
          <StatisticIteam
            key={stat.id}
           id={stat.id}
            label ={stat.label}
            percentage={stat.percentage}

          >
            
          </StatisticIteam>
          
          ))}
    </ul>
  </section>
)
}
Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            litle: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }).isRequired
      ).isRequired,
 
}

export default Statistics;