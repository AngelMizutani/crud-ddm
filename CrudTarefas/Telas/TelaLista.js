import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';

import ItemLista from './componentes/ItemLista';
import DB from '../DB';

export default function TelaLista({ route, navigation }) {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        DB.listar().then(itens => setItens(itens));
    }, [route]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Tarefas</Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itensContainer}
            >
                {itens.map(item => {
                    return <ItemLista
                        key={item.id}
                        id={item.id}
                        item={item.prazo + ' - ' + item.tarefa}
                        navigation={navigation}
                    />
                })}
            </ScrollView>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb3d9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#cc0052',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flexgrow: 1,
        width: '90%'
    },
    itensContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    }
});
