
function includeCEP ({ commit }, payload) {
  commit('ADD_CEP', payload);
}

function removeAddress ({ commit, state }, payload) {
  console.log(state, payload);
  commit('REMOVE_ADDRESS', state.list_adress.filter(({ cep }) => cep !== payload));
}

async function fetchCEPList ({ commit, state }, payload) {
  const queries = await Promise.all(
    payload
      .map(cep => {
        return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
      })
  );

  // add only valid and non repeated addresses
  commit('ADD_ADDRESS', queries.filter(address => !address.erro && !state.list_adress.find(item => item.cep === address.cep)));
}

export default {
  includeCEP,
  fetchCEPList,
  removeAddress
};
