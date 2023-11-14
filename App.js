import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInfo from './PersonalInfo';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;