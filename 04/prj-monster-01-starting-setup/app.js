function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyle() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyle() {
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        isMonsterAlive() {
            return this.monsterHealth > 0;
        },
        isPlayerAlive() {
            return this.playerHealth > 0;
        },
        winner() {
            if (this.isMonsterAlive) {
                return this.isPlayerAlive ? null : 'monster'
            } else {
                return this.isPlayerAlive ? 'player' : 'draw'
            }
        }
    },
    methods: {
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            } else {
                this.attackPlayer();
            }
        },
        useSpecialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            } else {
                this.attackPlayer();
            }
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(20, 8);
            this.playerHealth += healValue;
            this.addLogMessage('player', 'heal', healValue);
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.attackPlayer();
        },
        startGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.playerHealth = 0;
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');