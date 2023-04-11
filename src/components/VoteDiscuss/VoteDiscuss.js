import style from "./VoteDiscuss.module.css"

export const VoteDiscuss = () => {
    return (
        <div className={`${style["vote-discuss"]}`}>
            <h3 className={`${style["vote-discuss-head"]}`}>Vote And Discuss</h3>
            <div className={`${style["vote-box"]}`}>
                <h1>Cast your vote</h1>
                <h3>Who is the best?</h3>
                <div>
                    <div className={`${style["radio-option"]}`}>
                        <input name = "vote" type="radio" id="Stephan Curry" value="Stephan Curry" />
                        <label htmlFor="Stephan Curry">Stephen Curry</label>
                    </div>
                    <div className={`${style["radio-option"]}`}>
                        <input name = "vote" type="radio" id="LeBron James" value="LeBron James" />
                        <label htmlFor="LeBron James">LeBron James</label>
                    </div>
                </div>
                <button className={`${style["submit-vote"]}`}>Vote In!</button>
            </div>
        </div>
    )
}
