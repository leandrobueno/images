import api from '../../api/imgur';
import { rounter, router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fecthImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const { username } = rootState.auth;
        const response = await api.fecthImages(token, username);
        commit('setImages', response.data.data)
    },

    async uploadImages({ commit, rootState }, images) {
        const {token} = rootState.auth;
        await api.uploadImages(images, token);
        router.push('/');
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