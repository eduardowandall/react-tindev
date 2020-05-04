import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import login from './pages/login';
import main from './pages/main';

export default createAppContainer(
    createSwitchNavigator(
        {
            login, main
        }
    )
)