import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const userStore = create(
  persist(
    (set, get) => ({
      user: null,
      login: (data) => {
        set((state) => ({...state, user: data }))
      },
      logout: () => {
        set((state) => ({ ...state, user: null }))
      },
    }),
    {name:'user-store'},
  ),
)


export const productStore = create((set) => ({
  productsDb: [],
  productsFiltered:[],
  filtro:'',
  loading:false,
  setProductsDb: (data) => {
    set((state) => ({...state, productsDb: data }))
  },
  setProducsFiltered:(data) => {
    set((state) => ({...state, productsFiltered: data}))
  },
  setFiltro:(data) => {
    set((state) => ({...state, filtro:data}))
  },
  setLoading:(data) => {
    set((state) => ({...state, loading:data}))
  }
}))