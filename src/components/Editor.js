import {connect} from 'react-redux'
import { changeEditorView} from '../actions/stateActions'
import { inputAction } from '../actions/stateActions'
import propTypes from 'prop-types'
import { FaExpand } from 'react-icons/fa'
import '../scss/style.css'

const Editor = (props) => {

  const handleClick = () => {
    props.changeEditorView(props.editorView);
  }
  const handleChange = (e) => {
    props.inputAction(e.target.value)
  }
  const handleSelect = () => {
    document.getElementById('editor').select();
  }
  const editorClass = props.editorView === true ? `scroller max-editor` : `scroller norm-editor`
  const eDisplay = props.previewerView === true ? 'no-e-display' : 'do-e-display'
  return (
    <div id={eDisplay}>
      <div className='title-bar'><div id='bar'>Editor</div><FaExpand id='max' onClick={handleClick} /></div>
      <textarea className={editorClass} id='editor' onChange={handleChange} value={props.input} onDoubleClick={handleSelect}>
      </textarea>
    </div>
  )
}
const mapStateToProps = ({previewerView, editorView, input}) => ({
  previewerView,
  editorView,
  input
})

const mapDispatchToProps = (dispatch) => ({
  changeEditorView: ((editorView) => dispatch(changeEditorView(editorView))),
  inputAction: (  (input) => dispatch(inputAction(input)) )
});

Editor.propTypes = {
  editorView: propTypes.bool.isRequired,
  input: propTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor)