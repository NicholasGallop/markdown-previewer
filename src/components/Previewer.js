import {connect} from 'react-redux'
import {changePreviewerView} from '../actions/stateActions'
import propTypes from 'prop-types'
import { FaExpand } from 'react-icons/fa'
import '../scss/style.css'
//import {marked}  from "https://cdn.skypack.dev/marked@4.0.0";
//  'dynamic' export/import not allowed for github, had to install npm:'marked'
import {marked} from 'marked';
//     {brackets} important to extract function
   
const Previewer = (props) => {
  marked.setOptions({
    breaks: true,
  });
  const markdown = marked(props.input);
  const handleClick = () => {
    props.changePreviewerView(props.previewerView);
  }
  const previewerClass = props.previewerView === true ? `scroller max-previewer` : `scroller norm-previewer`
  const pDisplay = props.editorView === true ? 'no-p-display' : 'do-p-display'
  return (
    <div id={pDisplay}>
      <div className='title-bar'><div id='bar'>Previewer</div><FaExpand id='max' onClick={handleClick} /></div>
      <div className={previewerClass} id='preview' dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  )
}
const mapStateToProps = ({previewerView, editorView, input}) => ({
  previewerView,
  editorView,
  input
})
const mapDispatchToProps = (dispatch) => {
  return {
    changePreviewerView: (previewerView) => {
      dispatch(changePreviewerView(previewerView));
    }
  }
};

Previewer.propTypes = {
  previewerView: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Previewer)
