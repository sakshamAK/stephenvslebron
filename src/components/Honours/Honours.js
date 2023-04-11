import { honours, records } from '../../Data/honoursAndRecords'
import style from './Honours.module.css'

export const Honours = () => {
  return (
    <div className={`${style["honours"]}`}>
      <h1>Honours</h1>
      <div className={`${style["honours-table"]}`}>
        <div className={`${style["honours-items"]}`}><p>Stephen Curry</p><p>LeBron James</p></div>
        {
          honours.map(({ title, scoreLebron, scoreStephen }) => (
            <>
              <p className={`${style["honours-item-header"]}`}>{title}</p>
              <div className={`${style["honours-items"]}`}><h1 className={`${style["score-board"]}`}>{scoreStephen}</h1><h2 className={`${style["shadow-heading"]}`}>{title}</h2><h1 className={`${style["score-board"]}`}>{scoreLebron}</h1></div>
            </>
          ))
        }

      </div>
      <h1 className={`${style["records-heading"]}`}>Records</h1>
      <div className={`${style["records-table"]}`}>
        <div className={`${style["single-record"]}`}>
          <div className={`${style["record-items"]}`}><p>Stephan Curry</p><h2>World Records</h2></div>
          <div className={`${style["record-items"]}`}><p>LeBron James</p><h2>World Records</h2></div>
        </div>
        {
          records.map(({ title, recordStephan, recordLebron, updatedAt }) => (
            <div className={`${style["single-record"]}`}>
              <div className={`${style["record-items"]}`}><p className={`${style["world-record"]}`}>World Record</p><p className={`${style["record-statement"]}`}>{title}: <b>{recordStephan}</b></p><p className={`${style["record-update"]}`}><span>Updated at:</span><span>{updatedAt}</span> </p></div>
              <div className={`${style["record-items"]}`}><p className={`${style["world-record"]}`}>World Record</p><p className={`${style["record-statement"]}`}>{title}: <b>{recordLebron}</b></p><p className={`${style["record-update"]}`}><span>Updated at:</span><span>{updatedAt}</span></p></div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
