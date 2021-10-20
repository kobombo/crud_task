import { combineReducers, createStore } from 'redux';
import { recipeReducer } from '../recipe/recipe-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootStateOrAny } from 'react-redux';

const rootReducer = combineReducers({
  recipeReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<RootStateOrAny>(persistConfig, rootReducer as RootStateOrAny);

const store = createStore(
    persistedReducer
)

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { persistor, store };