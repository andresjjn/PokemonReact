import create from 'zustand';
import apiCall from '../../api';

const usePoksStore = create((set, get) => ({
  getPok: async () => {
    try {
      set({ isLoading: true, errorMessage: '', hasError: false });
      const pokResults = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=100' });
      set({ poks: pokResults.results });
    } catch (error) {
      set({ poks: [], hasError: true, errorMessage: 'Verify your internet connection' });
    } finally {
      set({ isLoading: false });
    }
  },
  poks: [],
  getPoksDetails: async (id) => {
    if (!id) {
      Promise.reject(new Error('Id required'));
    }
    try {
      set({ isLoading: true, hasError: false, errorMessage: '' });
      const resPokDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
      set({ pokDetail: resPokDetail });
    } catch (errpr) {
      set({
        pokDetail: {},
        hasError: true,
        errorMessage: 'Something is wrong with your internet conection or the PokeAPI'
      });
    } finally {
      set({ isLoading: false });
    }
  },
  pokDetail: {},
  isLoading: false,
  hasError: false,
  errorMessage: ''
}));

export default usePoksStore;
