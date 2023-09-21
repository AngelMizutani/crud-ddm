import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import DB from '../../DB';

export default function ItemLista(props) {

    async function editar() {
        const item = await DB.obterItem(props.id);
        props.navigation.navigate("Form", item);
    }

    async function excluir() {
        Alert.alert(
            "Atenção!",
            "Você realmente deseja excluir este item?",
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        DB.excluir(props.id)
                            .then(response => props.navigation.navigate("Lista", { id: props.id }));
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.item}</Text>
            <View style={styles.containerBotoes}>
                <TouchableOpacity style={styles.botaoEditar}>
                    <Icon name='edit' color='white' size={18} onPress={editar} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoExcluir}>
                    <Icon name='trash' color='white' size={18} onPress={excluir} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    containerBotoes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginTop: 10
    },
    botaoEditar: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    botaoExcluir: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
});