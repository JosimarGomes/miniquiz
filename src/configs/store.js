import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import sagas from '../sagas';

const rootSaga = createSagaMiddleware();

const store = createStore(rootReducer,{},compose( applyMiddleware(rootSaga), autoRehydrate() ) );

rootSaga.run(sagas);

persistStore(store,
    {storage : AsyncStorage,
        whitelist:['decks', 'user', 'userphoto', 'xp']
    });

export default store;