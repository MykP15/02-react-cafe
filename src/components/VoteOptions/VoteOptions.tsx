import css from './VoteOption.module.css'
import { VoteType } from '../../types/votes'


type VoteOptionProps = {
    onVote: (type: VoteType) => void,
    onReset: () => void,
    canReset: boolean,
}


function VoteOption({onVote , onReset , canReset}: VoteOptionProps) {
    return (
        <div className={css.container}>
  <button className={css.button} onClick={()=> onVote('good')}>Good</button>
  <button className={css.button} onClick={()=> onVote('neutral')}>Neutral</button>
            <button className={css.button} onClick={()=> onVote('bad')}>Bad</button>
            {canReset &&
                <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>}
  
</div>

    )
}

export default VoteOption