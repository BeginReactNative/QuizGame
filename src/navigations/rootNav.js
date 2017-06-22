import {StackNavigator} from 'react-navigation';
import Choose from '../screens/Choose';
import Game from '../screens/Game';
import Finish from '../screens/Finish';

const rootNav = StackNavigator({
    ChooseSCR: {screen: Choose},
    GameSRC: { 
        screen: Game , 
        navigationOptions : {
                header: null
    }
},
    FinishSCR: {
         screen: Finish,
         navigationOptions : {
                header: null
    }
     }
})

export default rootNav;

