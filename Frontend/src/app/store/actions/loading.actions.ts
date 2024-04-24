import { createAction, props } from '@ngrx/store';

export const loadingOn = createAction('[Loading] Loading Start');
export const loadingOff = createAction('[Loading] Loading End');
