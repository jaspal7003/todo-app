import { DRAWER_STATUS } from '../../Constant'

const initialDrawerStatus = false;

export function drawerStatus(state = initialDrawerStatus, action) {
    switch(action.type) {
        case DRAWER_STATUS:
            return action.payload;
        default:
            return state;
    }
}