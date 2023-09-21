import AsyncStorage from "@react-native-async-storage/async-storage";

async function salvarItem(item, id) {
    item.id = id ? id : new Date().getTime();
    const itensSalvos = await listar();

    if (id) {
        const index = await itensSalvos.findIndex(item => item.id === id);
        itensSalvos[index] = item;
    } else {
        itensSalvos.push(item);
    }

    return AsyncStorage.setItem('itens', JSON.stringify(itensSalvos));
}

async function listar() {
    return AsyncStorage.getItem('itens')
        .then(resposta => {
            if (resposta) {
                return Promise.resolve(JSON.parse(resposta));
            } else {
                return Promise.resolve([]);
            }
        })
}

async function obterItem(id) {
    const itensSalvos = await listar();
    return itensSalvos.find(item => item.id === id);
}

async function excluir(id) {
    let itensSalvos = await listar();
    const index = await itensSalvos.findIndex(item => item.id === id);
    itensSalvos.splice(index, 1);
    return AsyncStorage.setItem('itens', JSON.stringify(itensSalvos));
}


module.exports = {
    salvarItem,
    listar,
    obterItem,
    excluir
}