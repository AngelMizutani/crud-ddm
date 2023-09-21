import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaLista from '../TelaLista';
import TelaForm from '../TelaForm';

const { Navigator, Screen } = createBottomTabNavigator();

function AbaNavegacao() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#32264d',
                    tabBarInactiveTintColor: '#c1bccc',
                    tabBarActiveBackgroundColor: '#ebebf5',
                    tabBarInactiveBackgroundColor: '#fafafc',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: { display: 'none' }
                }}
            >
                <Screen
                    name='Lista'
                    component={TelaLista}
                    options={{ tabBarLabel: 'Tarefas' }}
                />
                <Screen
                    name='Form'
                    component={TelaForm}
                    options={{ tabBarLabel: 'Cadastrar' }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default AbaNavegacao;