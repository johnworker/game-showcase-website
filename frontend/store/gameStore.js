import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        games: []
    }),
    actions: {
        async fetchGames() {
            const res = await fetch('/api/games');
            this.games = await res.json();
        }
    }
});
