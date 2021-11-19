import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '@/store';

const useAppDispatch: TypedUseSelectorHook<RootState> = useSelector;
export default useAppDispatch;
