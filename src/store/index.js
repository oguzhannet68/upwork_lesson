export default {
  state: {
    getUser: null,
  },
  getters: {
    getUser: (state) => state.getUser,
  },
  mutations: {
    setUser(state, payload) {
      state.getUser = payload;
    },
    setError(state, error) {
      // Hata durumunda varsayılan değeri ayarla
      state.getUser = null;
      console.error(error);
    },
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        // Kullanıcı giriş işlemleri...
        // Örneğin, bir servisi çağırarak kullanıcı bilgilerini alabilirsiniz.
        // const user = await ServicesServis.getUser(payload);
        if (someCondition) {
          dispatch("login", payload); // Bu durumu kontrol edin ve gerekirse düzeltme yapın.
        }
        commit("setUser", payload);
      } catch (error) {
        console.error("Login error:", error);
        throw error; // Hata durumunu yönetebilirsiniz
      }
    },
  },
};
