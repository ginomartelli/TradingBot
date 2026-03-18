// ========== TRADUCTIONS ==========
const translations = {
    fr: {
        // Header
        title: "TradingBot",
        subtitle: "Testez vos stratégies de trading directement dans votre navigateur",
        badge1: "🚀 100% Client Side - Aucune installation requise",
        badge2: "🪙 Cryptos: données réelles | 📊 Actions: mode démo",
        
        // Control panel
        tradingParams: "⚙️ Paramètres de trading",
        asset: "📌 Actif:",
        period: "📅 Période de backtest:",
        days7: "7 jours",
        days30: "30 jours",
        days90: "90 jours",
        
        // Moving averages
        maTitle: "📊 Moyennes Mobiles",
        maShort: "MA courte:",
        maLong: "MA longue:",
        
        // RSI
        rsiTitle: "📉 RSI",
        rsiBuy: "Seuil achat (survendu):",
        rsiSell: "Seuil vente (suracheté):",
        
        // Risk management
        riskTitle: "🛡️ Gestion des risques",
        stopLoss: "Stop loss (%):",
        positionSize: "Taille position (USDT):",
        
        // Buttons
        runBacktest: "🚀 Exécuter le backtest",
        
        // Metrics
        totalReturn: "💰 Retour total",
        performance: "📈 Performance",
        trades: "🔄 Trades",
        finalValue: "💵 Valeur finale",
        
        // Charts
        priceChart: "📊 Prix et signaux de trading",
        pnlChart: "💰 Performance du portefeuille",
        
        // Signal list
        signalHistory: "📋 Historique des signaux",
        signalCount: "signal",
        signalCountPlural: "signaux",
        hoverSignal: "Passez la souris sur un signal",
        noSignals: "📭 Aucun signal généré",
        
        // Signal reasons
        reasonRSIBuy: "RSI survendu",
        reasonRSISell: "RSI suracheté",
        reasonBB: "Bande basse Bollinger",
        reasonStopLoss: "Stop loss",
        reasonCross: "Croisement baissier",
        reasonAuto: "Signal automatique",
        
         helpMA: "<strong>Moyenne Mobile (MA)</strong><br>Prix moyen sur X périodes<br>• MA courte (< 50) : réagit vite<br>• MA longue (> 50) : tendance long terme<br>Signal quand MA courte croise MA longue",
        helpRSI: "<strong>Relative Strength Index (0-100)</strong><br>Mesure de la force du mouvement<br>• < 30 : survendu (potentiel achat)<br>• > 70 : suracheté (potentiel vente)<br>• Entre 30-70 : zone neutre",
        helpRisk: "<strong>Stop Loss</strong><br>Vente automatique si le prix baisse de X%.<br>Ex: -5% sur un achat à 100$ → vente à 95$<br><br><strong>Taille position</strong><br>Montant investi par trade (en USDT).",
        
        // Asset groups
        cryptoGroup: "🪙 Cryptomonnaies (données réelles)",
        stockGroup: "📊 Actions (mode démonstration)",
        
        // Footer
        footer1: "⚠️ Disclaimer: Ce projet est éducatif - Ne pas utiliser pour du trading réel",
        footer2: "🪙 Cryptomonnaies: données réelles via Binance API | 📊 Actions: données simulées pour la démo",

        // Signal reasons 
        reasonBB: "Bande basse Bollinger",
        hoverSignal: "Passez la souris sur un signal",
        
        // Chart legends
        chartBuy: "ACHAT",
        chartSell: "VENTE",
        chartPrice: "Prix",
    },
    
    en: {
        // Header
        title: "TradingBot",
        subtitle: "Test your trading strategies directly in your browser",
        badge1: "🚀 100% Client Side - No installation required",
        badge2: "🪙 Crypto: real data | 📊 Stocks: demo mode",
        
        // Control panel
        tradingParams: "⚙️ Trading Parameters",
        asset: "📌 Asset:",
        period: "📅 Backtest period:",
        days7: "7 days",
        days30: "30 days",
        days90: "90 days",
        
        // Moving averages
        maTitle: "📊 Moving Averages",
        maShort: "Short MA:",
        maLong: "Long MA:",
        
        // RSI
        rsiTitle: "📉 RSI",
        rsiBuy: "Buy threshold (oversold):",
        rsiSell: "Sell threshold (overbought):",
        
        // Risk management
        riskTitle: "🛡️ Risk Management",
        stopLoss: "Stop loss (%):",
        positionSize: "Position size (USDT):",
        
        // Buttons
        runBacktest: "🚀 Run Backtest",
        
        // Metrics
        totalReturn: "💰 Total Return",
        performance: "📈 Performance",
        trades: "🔄 Trades",
        finalValue: "💵 Final Value",
        
        // Charts
        priceChart: "📊 Price and trading signals",
        pnlChart: "💰 Portfolio Performance",
        
        // Signal list
        signalHistory: "📋 Signal History",
        signalCount: "signal",
        signalCountPlural: "signals",
        hoverSignal: "Hover over a signal",
        noSignals: "📭 No signals generated",
        
        // Signal reasons
        reasonRSIBuy: "RSI oversold",
        reasonRSISell: "RSI overbought",
        reasonBB: "Bollinger lower band",
        reasonStopLoss: "Stop loss",
        reasonCross: "Bearish crossover",
        reasonAuto: "Auto signal",
        
        helpMA: "<strong>Moving Average (MA)</strong><br>Average price over X periods<br>• Short MA (< 50): reacts quickly<br>• Long MA (> 50): long-term trend<br>Signal when short MA crosses long MA",
        helpRSI: "<strong>Relative Strength Index (0-100)</strong><br>Measures momentum strength<br>• < 30: oversold (potential buy)<br>• > 70: overbought (potential sell)<br>• 30-70: neutral zone",
        helpRisk: "<strong>Stop Loss</strong><br>Automatic sell if price drops by X%.<br>Ex: -5% on a $100 buy → sell at $95<br><br><strong>Position Size</strong><br>Amount invested per trade (in USDT).",
        
        // Asset groups
        cryptoGroup: "🪙 Cryptocurrencies (real data)",
        stockGroup: "📊 Stocks (demo mode)",
        
        // Footer
        footer1: "⚠️ Disclaimer: This project is educational - Do not use for real trading",
        footer2: "🪙 Crypto: real data via Binance API | 📊 Stocks: simulated data for demo",

        // Signal reasons
        reasonBB: "Bollinger lower band",
        hoverSignal: "Hover over a signal",
        
        // Chart legends
        chartBuy: "BUY",
        chartSell: "SELL",
        chartPrice: "Price",
    }
};

let currentLang = 'fr';

// ========== FONCTIONS DE TRADUCTION ==========
function translateStaticElements(lang) {
    const t = translations[lang];
    
    // Help tips
    const helpTips = document.querySelectorAll('.help-tip .tooltip-text');
    if (helpTips.length >= 3) {
        helpTips[0].innerHTML = t.helpMA;  // MA help
        helpTips[1].innerHTML = t.helpRSI; // RSI help
        helpTips[2].innerHTML = t.helpRisk; // Risk help
    }
    
    // Asset groups
    const optgroups = document.querySelectorAll('#asset optgroup');
    if (optgroups.length >= 2) {
        optgroups[0].label = t.cryptoGroup;
        optgroups[1].label = t.stockGroup;
    }
    
    // Asset options (keep values, translate display text)
    const cryptoOptions = {
        'BTCUSDT': 'Bitcoin (BTC/USDT)',
        'ETHUSDT': 'Ethereum (ETH/USDT)',
        'BNBUSDT': 'Binance Coin (BNB/USDT)',
        'SOLUSDT': 'Solana (SOL/USDT)',
        'ADAUSDT': 'Cardano (ADA/USDT)',
        'DOTUSDT': 'Polkadot (DOT/USDT)'
    };
    
    const stockOptions = {
        'AAPL': 'Apple (AAPL)',
        'GOOGL': 'Google (GOOGL)',
        'MSFT': 'Microsoft (MSFT)',
        'TSLA': 'Tesla (TSLA)',
        'AMZN': 'Amazon (AMZN)',
        'META': 'Meta (META)'
    };
    
    // Update crypto options (keep same names in English/French for proper nouns)
    const options = document.querySelectorAll('#asset option');
    options.forEach(opt => {
        if (cryptoOptions[opt.value]) {
            opt.textContent = cryptoOptions[opt.value]; // Same in both languages
        } else if (stockOptions[opt.value]) {
            opt.textContent = stockOptions[opt.value]; // Same in both languages
        }
    });
    
    // Period options
    const periodOptions = document.querySelectorAll('#period option');
    periodOptions[0].textContent = t.days7;
    periodOptions[1].textContent = t.days30;
    periodOptions[2].textContent = t.days90;
    
    // Footer
    const footerPs = document.querySelectorAll('footer p');
    if (footerPs.length >= 2) {
        footerPs[0].textContent = t.footer1;
        footerPs[1].textContent = t.footer2;
    }
}

function translatePage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // NE PAS sauvegarder les valeurs, juste mettre à jour le texte des labels
    // en préservant les spans existants
    
    // Header
    document.querySelector('header h1').textContent = t.title;
    document.querySelector('header p').textContent = t.subtitle;
    document.querySelectorAll('.badge')[0].textContent = t.badge1;
    document.querySelectorAll('.badge')[1].textContent = t.badge2;
    
    // Control panel title
    document.querySelector('.control-panel h2').textContent = t.tradingParams;
    
    // Asset selector label
    document.querySelector('label[for="asset"]').textContent = t.asset;
    
    // Period selector label
    document.querySelector('label[for="period"]').textContent = t.period;
    
    // Moving averages - Mettre à jour seulement le texte, pas le HTML
    const maShortLabel = document.querySelector('label[for="ma-short"]');
    const maShortSpan = document.getElementById('ma-short-value');
    maShortLabel.innerHTML = `${t.maShort} `;
    maShortLabel.appendChild(maShortSpan); // Réattacher le span existant
    
    const maLongLabel = document.querySelector('label[for="ma-long"]');
    const maLongSpan = document.getElementById('ma-long-value');
    maLongLabel.innerHTML = `${t.maLong} `;
    maLongLabel.appendChild(maLongSpan);
    
    // RSI - Mettre à jour seulement le texte
    const rsiBuyLabel = document.querySelector('label[for="rsi-buy"]');
    const rsiBuySpan = document.getElementById('rsi-buy-value');
    rsiBuyLabel.innerHTML = `${t.rsiBuy} `;
    rsiBuyLabel.appendChild(rsiBuySpan);
    
    const rsiSellLabel = document.querySelector('label[for="rsi-sell"]');
    const rsiSellSpan = document.getElementById('rsi-sell-value');
    rsiSellLabel.innerHTML = `${t.rsiSell} `;
    rsiSellLabel.appendChild(rsiSellSpan);
    
    // Risk management - Mettre à jour seulement le texte
    const stopLossLabel = document.querySelector('label[for="stop-loss"]');
    const stopLossSpan = document.getElementById('stop-loss-value');
    stopLossLabel.innerHTML = `${t.stopLoss} `;
    stopLossLabel.appendChild(stopLossSpan);
    
    const positionSizeLabel = document.querySelector('label[for="position-size"]');
    const positionSizeSpan = document.getElementById('position-size-value');
    positionSizeLabel.innerHTML = `${t.positionSize} `;
    positionSizeLabel.appendChild(positionSizeSpan);
    
    // Button
    document.getElementById('run-backtest').innerHTML = t.runBacktest;
    
    // Metrics
    const metricCards = document.querySelectorAll('.metric-card h3');
    metricCards[0].innerHTML = t.totalReturn;
    metricCards[1].innerHTML = t.performance;
    metricCards[2].innerHTML = t.trades;
    metricCards[3].innerHTML = t.finalValue;
    
    // Chart titles
    if (priceChart) {
        priceChart.options.plugins.title.text = t.priceChart;
        priceChart.update();
    }
    if (pnlChart) {
        pnlChart.options.plugins.title.text = t.pnlChart;
        pnlChart.update();
    }
    
    // Signal list
    document.querySelector('.signal-list h3').innerHTML = t.signalHistory;
    document.getElementById('reason-text').textContent = t.hoverSignal;
    
    // Traduire les éléments statiques
    translateStaticElements(lang);
    
    // Mettre à jour le compteur de signaux
    if (bot.signals.length > 0) {
        updateSignalList(bot.signals);
    }
}

// ========== INITIALISATION DE LA LANGUE ==========
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter les boutons de langue
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            translatePage(e.target.dataset.lang);
            
            // Re-run backtest to update charts with new language
            if (bot.prices.length > 0) {
                runBacktest();
            }
        });
    });
    
    // Initialiser avec le français
    translatePage('fr');
    
    // Configurer les sliders APRÈS la traduction
    setupSliders();
    
    document.getElementById('run-backtest').addEventListener('click', () => runBacktest());
    setTimeout(() => {
        runBacktest();
        setTimeout(() => { notFirstRun = true; }, 2000);
    }, 100);
});

const APIS = {
    BINANCE: 'https://api.binance.com/api/v3'
};

let currentParams = {};

class TradingBot {
    constructor() {
        this.prices = [];
        this.dates = [];
        this.signals = [];
        this.pnl = [];
    }

    async fetchData(symbol, days) {
        if (typeof axios === 'undefined') {
            console.warn('Axios non chargé : utilisation des données simulées');
            return this.generateMockData(symbol, days);
        }
        
        const endTime = Date.now();
        const startTime = endTime - (days * 24 * 60 * 60 * 1000);

        try {
            if (symbol.endsWith('USDT')) {
                return await this.fetchCryptoData(symbol, startTime, endTime);
            } else {
                const btcData = await this.fetchCryptoData('BTCUSDT', startTime, endTime);
                return this.adaptCryptoToStock(btcData, symbol, days);
            }
        } catch (error) {
            console.error('Erreur fetchData:', error);
            alert('Erreur de récupération des données: ' + error.message + '\nUtilisation de données simulées à la place.');
            return this.generateMockData(symbol, days);
        }
    }

    adaptCryptoToStock(btcData, stockSymbol, days) {
        const prices = [];
        const dates = [];
        
        const stockProfiles = {
            'AAPL': { basePrice: 175, volatilityFactor: 0.1, smoothness: 12, independence: 0.8, maxDeviation: 0.15, noiseLevel: 0.5 },
            'GOOGL': { basePrice: 140, volatilityFactor: 0.15, smoothness: 10, independence: 0.7, maxDeviation: 0.2, noiseLevel: 0.8 },
            'MSFT': { basePrice: 380, volatilityFactor: 0.1, smoothness: 12, independence: 0.8, maxDeviation: 0.15, noiseLevel: 0.5 },
            'TSLA': { basePrice: 240, volatilityFactor: 0.4, smoothness: 5, independence: 0.4, maxDeviation: 0.35, noiseLevel: 1.5 },
            'AMZN': { basePrice: 145, volatilityFactor: 0.2, smoothness: 8, independence: 0.6, maxDeviation: 0.25, noiseLevel: 1.0 },
            'META': { basePrice: 320, volatilityFactor: 0.25, smoothness: 8, independence: 0.6, maxDeviation: 0.25, noiseLevel: 1.0 },
            'default': { basePrice: 100, volatilityFactor: 0.2, smoothness: 8, independence: 0.6, maxDeviation: 0.2, noiseLevel: 0.8 }
        };
        
        const profile = stockProfiles[stockSymbol] || stockProfiles['default'];
        const trendBtc = [];
        const trendWindow = 30;
        
        for (let i = 0; i < btcData.prices.length; i++) {
            const start = Math.max(0, i - trendWindow);
            const end = Math.min(btcData.prices.length, i + trendWindow + 1);
            const window = btcData.prices.slice(start, end);
            const avg = window.reduce((a, b) => a + b, 0) / window.length;
            trendBtc.push(avg);
        }
        
        const btcAvg = trendBtc.reduce((a, b) => a + b, 0) / trendBtc.length;
        let independentFactor = 0;
        const independentWalk = [];
        
        for (let i = 0; i < btcData.prices.length; i++) {
            if (Math.random() < 0.05) {
                independentFactor += (Math.random() - 0.5) * 0.02;
            }
            independentFactor = Math.max(independentFactor, -profile.maxDeviation);
            independentFactor = Math.min(independentFactor, profile.maxDeviation);
            independentWalk.push(independentFactor);
        }
        
        for (let i = 0; i < btcData.prices.length; i++) {
            const trendRatio = trendBtc[i] / btcAvg;
            let stockPrice = profile.basePrice * trendRatio;
            stockPrice = stockPrice * (1 + independentWalk[i]);
            
            const flicker = Math.random(); 
            const highFreqNoise = (Math.random() - 0.5) * profile.noiseLevel * 2 + (flicker < 0.1 ? 1 : 0) * profile.noiseLevel * (Math.random() - 0.5) * 3; 
            const mediumNoise = Math.sin(i * 0.7) * 0.5 + Math.cos(i * 1.3) * 0.5 + (flicker > 0.9 ? 1 : 0) * (Math.random() - 0.5) * 5;
            
            stockPrice = stockPrice * (1 + (highFreqNoise + mediumNoise * 0.5) / 100);

            if (i > 0) {
                stockPrice = stockPrice * 0.9 + prices[i-1] * 0.09 + stockPrice * (Math.random() - 0.5) * profile.noiseLevel * 0.02;
            }
            
            stockPrice = Math.max(stockPrice, profile.basePrice * 0.5);
            stockPrice = Math.min(stockPrice, profile.basePrice * 2.0);
            
            prices.push(Math.round(stockPrice * 100) / 100);
            dates.push(btcData.dates[i]);
        }
        
        return { prices, dates };
    }

    async fetchCryptoData(symbol, startTime, endTime) {
        try {
            const response = await axios.get(`${APIS.BINANCE}/klines`, {
                params: {
                    symbol: symbol,
                    interval: '1h',
                    startTime: startTime,
                    endTime: endTime,
                    limit: 1000
                }
            });

            return {
                prices: response.data.map(candle => parseFloat(candle[4])),
                dates: response.data.map(candle => {
                    const date = new Date(candle[0]);
                    return `${date.getDate()}/${date.getMonth()+1}`;
                })
            };
        } catch (error) {
            console.error('Erreur Binance:', error.response?.data || error.message);
            if (error.response?.status === 429) {
                throw new Error('Rate limit dépassé, attendez un moment');
            } else if (error.response?.status === 403) {
                throw new Error('Accès interdit à l\'API Binance');
            }
            throw new Error('Impossible de récupérer les données: ' + error.message);
        }
    }

    generateMockData(symbol, days) {
        const prices = [];
        const dates = [];
        
        const assetProfiles = {
            'BTCUSDT': { basePrice: 50000, volatility: 3.5, bigMoveChance: 0.15, name: 'Bitcoin' },
            'ETHUSDT': { basePrice: 3000, volatility: 4.0, bigMoveChance: 0.15, name: 'Ethereum' },
            'BNBUSDT': { basePrice: 400, volatility: 4.5, bigMoveChance: 0.12, name: 'Binance Coin' },
            'SOLUSDT': { basePrice: 150, volatility: 5.0, bigMoveChance: 0.2, name: 'Solana' },
            'ADAUSDT': { basePrice: 0.5, volatility: 4.0, bigMoveChance: 0.1, name: 'Cardano' },
            'DOTUSDT': { basePrice: 7, volatility: 4.5, bigMoveChance: 0.12, name: 'Polkadot' },
            'AAPL': { basePrice: 175, volatility: 2.0, bigMoveChance: 0.08, name: 'Apple' },
            'GOOGL': { basePrice: 140, volatility: 2.2, bigMoveChance: 0.08, name: 'Google' },
            'MSFT': { basePrice: 380, volatility: 2.0, bigMoveChance: 0.08, name: 'Microsoft' },
            'TSLA': { basePrice: 240, volatility: 3.5, bigMoveChance: 0.15, name: 'Tesla' },
            'AMZN': { basePrice: 145, volatility: 2.5, bigMoveChance: 0.1, name: 'Amazon' },
            'META': { basePrice: 320, volatility: 2.8, bigMoveChance: 0.12, name: 'Meta' },
            'default': { basePrice: 100, volatility: 2.0, bigMoveChance: 0.08, name: 'Asset' }
        };
        
        const profile = assetProfiles[symbol] || assetProfiles['default'];
        let currentPrice = profile.basePrice;
        const today = new Date();
        let trend = 0;
        
        for (let i = days; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = `${date.getDate()}/${date.getMonth()+1}`;
            const pointsPerDay = Math.floor(Math.random() * 5) + 4;
            
            for (let j = 0; j < pointsPerDay; j++) {
                if (Math.random() < 0.05) {
                    trend = (Math.random() * 2) - 1;
                }
                
                let change = (Math.random() * profile.volatility * 2) - profile.volatility;
                change += trend * 0.5;
                
                if (Math.random() < profile.bigMoveChance) {
                    const bigMove = (Math.random() * profile.volatility * 3) - (profile.volatility * 1.5);
                    change += bigMove;
                }
                
                currentPrice = currentPrice * (1 + change / 100);
                
                if (currentPrice > profile.basePrice * 3) {
                    currentPrice = profile.basePrice * 2.5;
                } else if (currentPrice < profile.basePrice * 0.3) {
                    currentPrice = profile.basePrice * 0.4;
                }
                
                prices.push(Math.round(currentPrice * 100) / 100);
                dates.push(dateStr);
            }
        }
        
        console.log(`${profile.name} - Min: ${Math.min(...prices).toFixed(2)}, Max: ${Math.max(...prices).toFixed(2)}`);
        return { prices, dates };
    }

    calculateMA(prices, period) {
        if (prices.length < period) return null;
        const sum = prices.slice(-period).reduce((a, b) => a + b, 0);
        return sum / period;
    }

    calculateRSI(prices, period = 14) {
        if (prices.length < period + 1) return null;
        
        let gains = 0;
        let losses = 0;
        
        for (let i = prices.length - period; i < prices.length; i++) {
            const diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                gains += diff;
            } else {
                losses -= diff;
            }
        }
        
        const avgGain = gains / period;
        const avgLoss = losses / period;
        
        if (avgLoss === 0) return 100;
        
        const rs = avgGain / avgLoss;
        return 100 - (100 / (1 + rs));
    }

    calculateBollingerBands(prices, period = 20) {
        if (prices.length < period) return { upper: null, lower: null, ma: null };
        
        const recentPrices = prices.slice(-period);
        const ma = recentPrices.reduce((a, b) => a + b, 0) / period;
        const squaredDiffs = recentPrices.map(p => Math.pow(p - ma, 2));
        const stdDev = Math.sqrt(squaredDiffs.reduce((a, b) => a + b, 0) / period);
        
        return {
            upper: ma + (2 * stdDev),
            lower: ma - (2 * stdDev),
            ma: ma
        };
    }

    generateSignals(params) {
    const signals = [];
    let inPosition = false;
    let entryPrice = 0;
    let entryIndex = 0;
    
    const maShort = params.maShort;
    const maLong = params.maLong;
    const rsiBuy = params.rsiBuy;
    const rsiSell = params.rsiSell;
    const stopLoss = params.stopLoss / 100;
    
    for (let i = Math.max(maLong, 20); i < this.prices.length; i++) {
        const currentPrice = this.prices[i];
        const pricesWindow = this.prices.slice(0, i + 1);
        
        const maS = this.calculateMA(pricesWindow, maShort);
        const maL = this.calculateMA(pricesWindow, maLong);
        const rsi = this.calculateRSI(pricesWindow);
        const bb = this.calculateBollingerBands(pricesWindow);
        
        let buySignal = false;
        let buyReasonKey = '';
        let buyReasonValue = '';
        
        if (maS && maL && maS > maL) {
            if (rsi && rsi < rsiBuy) {
                buySignal = true;
                buyReasonKey = 'RSI_BUY';
                buyReasonValue = `RSI ${rsi.toFixed(1)} < ${rsiBuy}`;
            } else if (bb.lower && currentPrice <= bb.lower) {
                buySignal = true;
                buyReasonKey = 'BB_BUY';
                buyReasonValue = `Bande basse (${bb.lower.toFixed(2)})`;
            }
        }
        
        let sellSignal = false;
        let sellReasonKey = '';
        let sellReasonValue = '';
        
        if (inPosition) {
            if (currentPrice <= entryPrice * (1 - stopLoss)) {
                sellSignal = true;
                sellReasonKey = 'STOP_LOSS';
                sellReasonValue = `Stop loss -${(stopLoss*100).toFixed(0)}%`;
            } else if (rsi && rsi > rsiSell) {
                sellSignal = true;
                sellReasonKey = 'RSI_SELL';
                sellReasonValue = `RSI ${rsi.toFixed(1)} > ${rsiSell}`;
            } else if (maS && maL && maS < maL) {
                sellSignal = true;
                sellReasonKey = 'CROSS_SELL';
                sellReasonValue = `MA courte < MA longue`;
            }
        }
        
        if (buySignal && !inPosition) {
            signals.push({
                type: 'BUY',
                price: currentPrice,
                date: this.dates[i],
                index: i,
                reasonKey: buyReasonKey,
                reasonValue: buyReasonValue
            });
            inPosition = true;
            entryPrice = currentPrice;
            entryIndex = i;
        } else if (sellSignal && inPosition) {
            signals.push({
                type: 'SELL',
                price: currentPrice,
                date: this.dates[i],
                index: i,
                reasonKey: sellReasonKey,
                reasonValue: sellReasonValue
            });
            inPosition = false;
            entryPrice = 0;
            entryIndex = 0;
        }
    }
    
    return signals;
}

    calculatePNL(signals, positionSize) {
        const pnl = [];
        let cumulativePNL = 0;
        let inPosition = false;
        let entryPrice = 0;
        
        for (let i = 0; i < this.prices.length; i++) {
            const price = this.prices[i];
            const signal = signals.find(s => s.index === i);
            
            if (signal && signal.type === 'BUY' && !inPosition) {
                inPosition = true;
                entryPrice = price;
            } else if (signal && signal.type === 'SELL' && inPosition) {
                const tradePNL = (price - entryPrice) / entryPrice * positionSize;
                cumulativePNL += tradePNL;
                inPosition = false;
            }
            
            if (inPosition) {
                const currentPNL = cumulativePNL + (price - entryPrice) / entryPrice * positionSize;
                pnl.push(Math.round(currentPNL * 100) / 100);
            } else {
                pnl.push(Math.round(cumulativePNL * 100) / 100);
            }
        }
        
        return pnl;
    }

    calculateMetrics(signals, pnl, positionSize) {
        const totalReturn = pnl[pnl.length - 1] || 0;
        const numTrades = Math.floor(signals.length / 2);
        
        return {
            totalReturn: Math.round(totalReturn * 100) / 100,
            totalReturnPercent: Math.round((totalReturn / positionSize) * 100 * 100) / 100,
            numTrades: numTrades,
            finalValue: Math.round((positionSize + totalReturn) * 100) / 100
        };
    }
}

let priceChart = null;
let pnlChart = null;
let notFirstRun = false;
let bot = new TradingBot();

function setupSliders() {
    const sliders = [
        'ma-short', 'ma-long', 'rsi-buy', 'rsi-sell', 'stop-loss', 'position-size'
    ];
    
    sliders.forEach(id => {
        const slider = document.getElementById(id);
        const valueSpan = document.getElementById(`${id}-value`);
        
        // Nettoyer les anciens événements pour éviter les doublons
        slider.removeEventListener('input', slider._inputHandler);
        
        // Créer le gestionnaire d'événement
        const handler = function() {
            valueSpan.textContent = this.value;
        };
        
        // Stocker le gestionnaire pour pouvoir le nettoyer plus tard
        slider._inputHandler = handler;
        
        // Ajouter l'événement
        slider.addEventListener('input', handler);
    });
}

async function runBacktest() {
    const btn = document.getElementById('run-backtest');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="loading-spinner"></span> Calcul en cours...';
    btn.disabled = true;
    
    try {
        const params = {
            symbol: document.getElementById('asset').value,
            days: parseInt(document.getElementById('period').value),
            maShort: parseInt(document.getElementById('ma-short').value),
            maLong: parseInt(document.getElementById('ma-long').value),
            rsiBuy: parseInt(document.getElementById('rsi-buy').value),
            rsiSell: parseInt(document.getElementById('rsi-sell').value),
            stopLoss: parseFloat(document.getElementById('stop-loss').value),
            positionSize: parseFloat(document.getElementById('position-size').value)
        };
        
        currentParams = params;
        const data = await bot.fetchData(params.symbol, params.days);
        bot.prices = data.prices;
        bot.dates = data.dates;
        bot.signals = bot.generateSignals(params);
        bot.pnl = bot.calculatePNL(bot.signals, params.positionSize);
        const metrics = bot.calculateMetrics(bot.signals, bot.pnl, params.positionSize);

        updateMetrics(metrics);
        scrollToResults();
        updateCharts(bot, params.symbol);
        updateSignalList(bot.signals);
    } catch (error) {
        console.error('Erreur :', error);
        alert('backtest: ' + error.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function updateMetrics(metrics) {
    document.getElementById('total-return').textContent = 
        metrics.totalReturn > 0 ? `+${metrics.totalReturn} USDT` : `${metrics.totalReturn} USDT`;
    document.getElementById('total-return-percent').textContent = 
        metrics.totalReturnPercent > 0 ? `+${metrics.totalReturnPercent}%` : `${metrics.totalReturnPercent}%`;
    document.getElementById('num-trades').textContent = metrics.numTrades;
    document.getElementById('final-value').textContent = `${metrics.finalValue} USDT`;
    
    const totalReturnEl = document.getElementById('total-return');
    totalReturnEl.style.color = metrics.totalReturn >= 0 ? '#34d399' : '#f87171';
}

function updateCharts(bot, symbol) {
    if (priceChart) priceChart.destroy();
    if (pnlChart) pnlChart.destroy();
    
    const t = translations[currentLang];
    const ctx1 = document.getElementById('price-chart').getContext('2d');
    
    const buyData = new Array(bot.dates.length).fill(null);
    const sellData = new Array(bot.dates.length).fill(null);
    const buyPlaced = {};
    const sellPlaced = {};
    
    bot.signals.forEach(signal => {
        let foundIndex = -1;
        for (let i = 0; i < bot.dates.length; i++) {
            if (bot.dates[i] === signal.date && 
                Math.abs(bot.prices[i] - signal.price) < 0.01) {
                foundIndex = i;
                break;
            }
        }
        if (foundIndex !== -1) {
            if (signal.type === 'BUY' && !buyPlaced[signal.date]) {
                buyData[foundIndex] = signal.price;
                buyPlaced[signal.date] = true;
            } else if (signal.type === 'SELL' && !sellPlaced[signal.date]) {
                sellData[foundIndex] = signal.price;
                sellPlaced[signal.date] = true;
            }
        }
    });
    
    priceChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: bot.dates,
            datasets: [
                {
                    label: t.chartBuy,
                    data: buyData,
                    backgroundColor: '#34d399dd',
                    pointStyle: 'triangle',
                    pointRadius: 10,        // Augmenté de 8 à 10
                    pointHoverRadius: 16,    // Augmenté de 12 à 16
                    showLine: false,
                    order: 1 
                },
                {
                    label: t.chartSell,
                    data: sellData,
                    backgroundColor: '#f87171dd',
                    pointStyle: 'triangle',
                    pointRadius: 10,        // Augmenté de 8 à 10
                    pointHoverRadius: 16,    // Augmenté de 12 à 16
                    rotation: 180,
                    showLine: false,
                    order: 1  
                },
                {
                    label: `${symbol} - ${t.chartPrice}`,
                    data: bot.prices,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.1,
                    pointRadius: 1,          // Augmenté de 1 à 3
                    pointHoverRadius: 5,      // Augmenté de 5 à 8
                    pointBackgroundColor: '#3b82f6',
                    pointBorderWidth: 1,
                    order: 2 
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: t.priceChart,
                    color: '#f1f5f9',
                    font: { size: 16 }
                },
                legend: {
                    labels: { color: '#94a3b8' }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,        // Changé à false pour détection au survol
                    backgroundColor: '#1e293b',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            
                            if (label) {
                                label += ': ';
                            }
                            
                            if (context.parsed.y !== null) {
                                label += '$' + context.parsed.y.toFixed(2);
                                
                                if (context.dataset.label === t.chartBuy || context.dataset.label === t.chartSell) {
                                    const signal = bot.signals.find(s => 
                                        Math.abs(s.price - context.parsed.y) < 0.01 && 
                                        s.date === context.label
                                    );
                                    
                                    if (signal && signal.reasonKey) {
                                        let reasonText = '';
                                        switch(signal.reasonKey) {
                                            case 'RSI_BUY':
                                                reasonText = t.reasonRSIBuy;
                                                break;
                                            case 'RSI_SELL':
                                                reasonText = t.reasonRSISell;
                                                break;
                                            case 'BB_BUY':
                                                reasonText = t.reasonBB;
                                                break;
                                            case 'STOP_LOSS':
                                                reasonText = t.reasonStopLoss;
                                                break;
                                            case 'CROSS_SELL':
                                                reasonText = t.reasonCross;
                                                break;
                                            default:
                                                reasonText = t.reasonAuto;
                                        }
                                        label += ' - ' + reasonText;
                                    }
                                }
                            }
                            
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: '#334155' },
                    ticks: { color: '#94a3b8' },
                    title: {
                        display: true,
                        text: 'USDT',
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: { color: '#334155' },
                    ticks: { 
                        color: '#94a3b8',
                        maxRotation: 45,
                        maxTicksLimit: 20
                    }
                }
            },
            hover: {
                mode: 'index',
                intersect: false,            // Détection plus large
                animationDuration: 200
            }
        }
    });
    
    const ctx2 = document.getElementById('pnl-chart').getContext('2d');    
    pnlChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: bot.dates,
            datasets: [{
                label: 'P&L ' + t.chartPrice,
                data: bot.pnl,
                borderColor: '#34d399',
                backgroundColor: context => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(52, 211, 153, 0.3)');
                    gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
                    return gradient;
                },
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: 0,               // Ajout de points visibles
                pointHoverRadius: 8,
                pointBackgroundColor: '#34d399',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: t.pnlChart,
                    color: '#f1f5f9',
                    font: { size: 16 }
                },
                legend: {
                    labels: { color: '#94a3b8' }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8'
                }
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    grid: { color: '#334155' },
                    ticks: { 
                        color: '#94a3b8',
                        callback: value => value + ' USDT'
                    }
                },
                x: {
                    grid: { color: '#334155' },
                    ticks: { 
                        color: '#94a3b8',
                        maxRotation: 45,
                        maxTicksLimit: 20
                    }
                }
            }
        }
    });
}
function updateSignalList(signals) {
    const container = document.querySelector('.signals-container');
    const reasonDiv = document.getElementById('last-signal-reason');
    const reasonText = document.getElementById('reason-text');
    const signalCountSpan = document.getElementById('signal-count');
    
    if (signalCountSpan) {
        const t = translations[currentLang];
        const countText = signals.length === 1 ? t.signalCount : t.signalCountPlural;
        signalCountSpan.textContent = `${signals.length} ${countText}`;
    }
    
    if (!container || !reasonDiv || !reasonText) return;
    
    if (signals.length === 0) {
        container.innerHTML = '<p class="no-signals">📭 ' + translations[currentLang].noSignals + '</p>';
        reasonText.textContent = translations[currentLang].noSignals;
        return;
    }
    
    const allSignals = [...signals].reverse();
    
    container.innerHTML = allSignals.map(signal => {
        let reason = '';
        const t = translations[currentLang];
        
        // Utilise reasonKey pour la traduction
        switch(signal.reasonKey) {
            case 'RSI_BUY':
                reason = t.reasonRSIBuy;
                break;
            case 'RSI_SELL':
                reason = t.reasonRSISell;
                break;
            case 'BB_BUY':
                reason = t.reasonBB;
                break;
            case 'STOP_LOSS':
                reason = t.reasonStopLoss;
                break;
            case 'CROSS_SELL':
                reason = t.reasonCross;
                break;
            default:
                reason = t.reasonAuto;
        }
        
        return `
        <div class="signal-item" 
             data-reason="${reason}"
             data-type="${signal.type}">
            <span class="signal-date">${signal.date}</span>
            <span class="signal-${signal.type.toLowerCase()}">${signal.type}</span>
            <span class="signal-price">$${signal.price.toFixed(2)}</span>
        </div>
        `;
    }).join('');
    
    document.querySelectorAll('.signal-item').forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const reason = e.currentTarget.dataset.reason;
            const type = e.currentTarget.dataset.type;
            
            reasonText.textContent = `📌 ${reason}`;
            reasonDiv.style.borderLeftColor = type === 'BUY' ? '#34d399' : '#f87171';
            reasonDiv.style.backgroundColor = type === 'BUY' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(248, 113, 113, 0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            reasonText.textContent = translations[currentLang].hoverSignal;
            reasonDiv.style.borderLeftColor = '#3b82f6';
            reasonDiv.style.backgroundColor = '#1e293b';
        });
    });
}

function scrollToResults() {
    const resultsPanel = document.querySelector('.results-panel');
    if (resultsPanel && notFirstRun) {
        const offset = 25;
        const elementPosition = resultsPanel.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}
