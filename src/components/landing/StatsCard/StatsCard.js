import style from './StatsCard.module.css'

export const StatsCard = ({stats}) => {
    const { stephan: { points: ps, rebounds: rs, assists: as, steals: ss, blocks: bs }, lebron: { points: pl, rebounds: rl, assists: al, steals: sl, blocks: bl } } = stats
    return (
        <div className={`${style["statCard"]}`}>
            <h2>STATS IN GAME BETWEEN THEM</h2>
            <h3>Averages</h3>
            <div className={`${style["cards"]}`}>
                <div className={`${style["playerStat"]}`}>
                    <h4 className={`${style["playerNameL"]}`}>Stephan Curry</h4>
                    <div className={`${style["scores"]}`}>
                        <div className={`${style["scorePlateL"]}`}><h1>{ps}</h1><div>Points</div></div>
                        <div className={`${style["scorePlateL"]}`}><h1>{rs}</h1><div>Rebounds</div></div>
                        <div className={`${style["scorePlateL"]}`}><h1>{as}</h1><div>Assists</div></div>
                        <div className={`${style["scorePlateL"]}`}><h1>{ss}</h1><div>Steals</div></div>
                        <div className={`${style["scorePlateL"]}`}><h1>{bs}</h1><div>Blocks</div></div>
                    </div>
                </div>
                <div className={`${style["playerStat"]}`}>
                    <h4 className={`${style["playerNameR"]}`}>LeBron James</h4>
                    <div className={`${style["scores"]}`}>
                        <div className={`${style["scorePlateR"]}`}><h1>{bl}</h1><div>Blocks</div></div>
                        <div className={`${style["scorePlateR"]}`}><h1>{sl}</h1><div>Steals</div></div>
                        <div className={`${style["scorePlateR"]}`}><h1>{al}</h1><div>Assists</div></div>
                        <div className={`${style["scorePlateR"]}`}><h1>{rl}</h1><div>Rebounds</div></div>
                        <div className={`${style["scorePlateR"]}`}><h1>{pl}</h1><div>Points</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
