import { DRAWER_STATUS } from './../../Constant';

export function changeDrawerStatus(payload) {
    return {
        type: DRAWER_STATUS,
        payload
    }
}