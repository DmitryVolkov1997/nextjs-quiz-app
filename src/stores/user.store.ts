import {create} from "zustand"

type TypeUserStore = {
    user: string | null
    setUser: (user: string | null) => void
}

export const useUserStore = create<TypeUserStore>((set) => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
    setUser: (user) => set(() => ({user})),
}))
