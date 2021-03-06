import { dropFiles, file, dragOver } from 'matreshka-binders-file';
import className from 'matreshka/binders/classname';
import style from '../style.css';

export default ({ owner }) => (<div
    className={style.batchContent}
    bind={{
        owner,
        files: [dropFiles('text')],
        dragovered: [dragOver(), className(style.dragovered)],
        'items.length': className(style.hasItems)
    }}
>
    {owner.items.nodes.sandbox}
    <div className={style.dndMessage}>Drop here</div>
    <div className={style.batchButtons}>
        <h3>Drop files here or add fields manually</h3>

        <button className={style.addFiles}>
            <input type="file" multiple bind={{ owner, files: file('text') }} />
            Open files
        </button>
        <button
            className={style.addField}
            onClick={evt => owner.onAddButtonClick(evt)}
        >Add field</button>
    </div>
</div>);
