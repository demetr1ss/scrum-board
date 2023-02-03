import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {StateType, AppDispatchType} from '../types/store-type';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export const useAppDispatch: () => AppDispatchType = useDispatch;
