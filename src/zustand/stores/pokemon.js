import create from 'zustand';
import apiCall from '../../api';

const usePoksStore = create((set, get) => ({
  getPok: async () => {
    try {
      set({ errorMessage: '', hasError: false });
      const pokResults = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=150' });
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
    } catch (error) {
      set({
        pokDetail: {},
        hasError: true,
        errorMessage: 'Something is wrong with your internet conection or the PokeAPI'
      });
    } finally {
      set({ isLoading: false });
    }
  },
  handleSearchClick: async (searchText) => {
    set({ isAtTop: true });
    const lowCasSearchText = searchText.toLowerCase();
    await get().getPok();
    const pokresults = await get().poks;

    if (searchText === 'close') {
      set({ poks: [] });
    } else if (searchText === '') {
      set({ poks: get().poks });
    } else {
      if (pokresults?.length) {
        const filteredData = pokresults.filter((value) => (
          value.name.toLowerCase().includes(lowCasSearchText)
        ));
        set({ poks: filteredData });
      }
    }
  },
  handleCloseClick: () => {
    set({ isAtTop: false });
    set({ results: [] });
  },
  pokDetail: {},
  isLoading: false,
  hasError: false,
  errorMessage: '',
  isAtTop: false
}));

export default usePoksStore;
