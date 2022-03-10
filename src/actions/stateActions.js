import { INPUT, PREVIEWER_VIEW, EDITOR_VIEW } from './types';

export const changeEditorView = (newView) => dispatch => {
  dispatch({
    type: EDITOR_VIEW,
    payload: !newView
  })
};
export const changePreviewerView = (newView) => dispatch => {
  dispatch({
    type: PREVIEWER_VIEW,
    payload: !newView
  })
};
export const inputAction = (newVal) => dispatch => {
  dispatch({
    type: INPUT,
    payload: newVal
  })
};