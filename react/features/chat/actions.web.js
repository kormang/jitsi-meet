// @flow

import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';

import { TOGGLE_CHAT, OPEN_CHAT } from './actionTypes';

export * from './actions.any';

/**
 * Toggles display of the chat side panel while also taking window
 * resize into account.
 *
 * @returns {Function}
 */
export function toggleChat() {
    return function(dispatch: (Object) => Object) {
        dispatch({ type: TOGGLE_CHAT });
        VideoLayout.onResize();
    };
}

/**
 * Opens display of the chat side panel while also taking window
 * resize into account.
 *
 * @returns {Function}
 */
export function openChat() {
    return function(dispatch: (Object) => Object) {
        dispatch({ type: OPEN_CHAT });
        VideoLayout.onResize();
    };
}
