
function ADD_CEP (state, payload) {
  state.cepList = [payload, ...state.cepList];
}

function REMOVE_ADDRESS (state, payload) {
  state.list_adress = payload;

  if (payload.length) {
    localStorage.setItem('list_adress', JSON.stringify(payload));
  } else {
    localStorage.removeItem('list_adress');
  }
}

function ADD_ADDRESS (state, payload) {
  const newlist_adress = [...payload, ...state.list_adress];

  state.list_adress = newlist_adress;

  localStorage.setItem('list_adress', JSON.stringify(newlist_adress));

  state.cepList = [];
}

export default {
  ADD_CEP,
  ADD_ADDRESS,
  REMOVE_ADDRESS
};
