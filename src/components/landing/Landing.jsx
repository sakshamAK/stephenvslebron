import { statsCard } from '../../Data/statsCards'
import style from './Landing.module.css'
import { StatsCard } from './StatsCard/StatsCard'

export const Landing = () => {
    return (
        <div className={`${style["landing"]}`}>
            <h3 className={`${style["all-time-stats"]}`}>All Time Stats</h3>
            {statsCard.map(stats => <StatsCard stats = {stats} />)}
        </div>
    )
}
