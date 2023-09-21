import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import DB from '../DB';


export default function TelaForm({ route, navigation }) {

    const id = route.params ? route.params.id : undefined;
    const [tarefa, setTarefa] = useState('');
    const [prazo, setPrazo] = useState('');

    useEffect(() => {
        if (!route.params) return;

        setTarefa(route.params.tarefa);
        setPrazo(route.params.prazo);
    }, [route]);

    function manipularInputTarefa(tarefa) {
        setTarefa(tarefa);
    }

    function manipularInputPrazo(prazo) { setPrazo(prazo); }

    async function manipularBotao() {
        const itemLista = { tarefa, prazo };
        DB.salvarItem(itemLista, id)
            .then(response => navigation.navigate("Lista", itemLista));

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar Tarefa</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicionar tarefa'
                    onChangeText={manipularInputTarefa}
                    value={tarefa}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Adicionar prazo'
                    onChangeText={manipularInputPrazo}
                    value={prazo}
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={manipularBotao}
                >
                    <View style={styles.containerBotao}>
                        <Icon name='save' size={22} color='white' />
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccf5ff',
        alignItems: 'center',
    },
    titulo: {
        color: '#0000cc',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    InputContainer: {
        flex: 1,
        marginTop: 30,
        marginBottom: 20,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    botao: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#0000cc',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    containerBotao: {
        flexDirection: 'row'
    },
    textoBotao: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});


