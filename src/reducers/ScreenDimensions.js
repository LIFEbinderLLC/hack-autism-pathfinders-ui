export const SCREEN_RESIZE = "SCREEN_RESIZE";

export default (state = {}, action) => {
    switch (action.type) {
        case SCREEN_RESIZE:
            return action.dimensions || state;
        default:
            return state;
    }
}
