import prop from 'matreshka/binders/prop';
import style from '../style.css';

export default ({ owner }) => (<div className={style.settings}>
    <select bind={{ owner, reformat: {} }}>
        <option value="">Keep JSON as is</option>
        <option value="beautify">Beautify on validate</option>
        <option value="minify">Minify on validate</option>
    </select>

    <button
        onClick={() => owner.onClickSave()}
        className={style.saveButton}
        data-save-text="Save"
        data-saved-text="Saved"
        bind={{
            owner,
            saved: prop('disabled')
        }}
    ></button>

    <button
        onClick={() => owner.onClickFullscreen()}
        className={style.fullscreenButton}
        bind={{
            owner,
            fullscreen: {
                getValue: null,
                setValue(value, { node }) {
                    this.textContent = value ? 'Exit Fullscreen' : 'Fullscreen Editor';
                }
            }
        }}
    ></button>
</div>);
