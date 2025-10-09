import PropTypes from "prop-types";
import './statistic.css';


const Statistics = ({stats}) => {
    return(
<section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
{stats.map(item =>(
        <li key={item.id} className="item">
            <div className="box">
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
   </div> 
   </li>
))}

   </ul>
</section>
)
}

Statistics.propTypes = {
 stats: PropTypes.arrayOf(
    PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
)};


export default Statistics