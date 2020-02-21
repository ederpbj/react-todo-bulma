import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//importar bulma
import './style/theme.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

// Components
import Layout from './pages/Layout';

//Add icone
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faCircle, faPlus);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Layout />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();