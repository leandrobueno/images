import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fecthImages({ rootState, commit }) {
        const {token} = rootState.auth;
        const {username} = rootState.auth;
        const response = await api.fecthImages(token, username);
        commit('setImages', response.data.data )
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}