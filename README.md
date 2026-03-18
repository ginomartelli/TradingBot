# TradingBot

A browser-based trading bot simulator for testing simple strategies using technical indicators.

## Overview

TradingBot is an educational tool that demonstrates how basic trading strategies work. It uses real cryptocurrency data and simulated stock data to show how technical indicators generate buy and sell signals.

### Features

- Real cryptocurrency data (BTC, ETH, etc.) via Binance public API
- Simulated stock data for major companies (Apple, Google, Tesla, etc.)
- Interactive parameters: moving averages, RSI thresholds, stop loss
- Real-time backtesting with visual results
- Performance metrics: P&L, number of trades, final portfolio value
- Signal history with detailed reasons for each trade
- Bilingual interface (English/French)

### How It Works

The bot combines three technical indicators:

1. **Moving Averages (MA)**
   - Short MA (5-50 periods): reacts quickly to price changes
   - Long MA (20-200 periods): shows long-term trend
   - Buy signal when short MA crosses above long MA

2. **Relative Strength Index (RSI)**
   - RSI below threshold (oversold) → potential buy
   - RSI above threshold (overbought) → potential sell
   - Range: 0-100, typical thresholds: 30 (oversold) and 70 (overbought)

3. **Bollinger Bands**
   - Price touches lower band → potential buy
   - Bands represent 2 standard deviations from moving average

### Trading Logic

**Buy Conditions** (requires uptrend: short MA > long MA):
- RSI below oversold threshold
- OR price touches lower Bollinger band

**Sell Conditions** (when in position):
- Stop loss triggered
- RSI above overbought threshold
- Bearish crossover (short MA < long MA)

### Usage

1. Select an asset (crypto or stock)
2. Choose backtest period (7, 30, or 90 days)
3. Adjust parameters using sliders:
   - Short/long moving average periods
   - RSI buy/sell thresholds
   - Stop loss percentage
   - Position size
4. Click "Run Backtest"
5. Analyze results:
   - Price chart with buy/sell signals (triangles)
   - P&L chart showing portfolio performance
   - Performance metrics
   - Signal history with reasons

### Limitations

- Cryptocurrency data only (no API key required)
- Stock data is simulated based on BTC patterns
- 90-day maximum period (Binance API limit)
- Educational purposes only - not for real trading

---

# TradingBot (Français)

Un simulateur de trading dans le navigateur pour tester des stratégies simples basées sur des indicateurs techniques. Aucune installation requise.

## Présentation

TradingBot est un outil pédagogique qui démontre le fonctionnement des stratégies de trading de base. Il utilise des données réelles de cryptomonnaies et des données simulées pour les actions.

### Fonctionnalités

- Données crypto réelles (BTC, ETH, etc.) via l'API publique Binance
- Données actions simulées pour les grandes entreprises
- Paramètres interactifs : moyennes mobiles, seuils RSI, stop loss
- Backtesting en temps réel avec résultats visuels
- Métriques de performance : P&L, nombre de trades, valeur finale
- Historique des signaux avec raisons détaillées
- Interface bilingue (français/anglais)

### Fonctionnement

Le bot combine trois indicateurs techniques :

1. **Moyennes Mobiles (MA)**
   - MA courte (5-50 périodes) : réagit vite aux variations
   - MA longue (20-200 périodes) : tendance long terme
   - Signal d'achat quand MA courte dépasse MA longue

2. **RSI (Relative Strength Index)**
   - RSI sous seuil (survendu) → achat potentiel
   - RSI au-dessus seuil (suracheté) → vente potentielle
   - Plage : 0-100, seuils typiques : 30 (survendu) et 70 (suracheté)

3. **Bandes de Bollinger**
   - Prix touche bande basse → achat potentiel
   - Bandes représentent 2 écarts-types de la moyenne mobile

### Logique de Trading

**Conditions d'Achat** (tendance haussière requise : MA courte > MA longue) :
- RSI sous seuil survendu
- OU prix touche bande basse de Bollinger

**Conditions de Vente** (quand en position) :
- Stop loss déclenché
- RSI au-dessus seuil surachaté
- Croisement baissier (MA courte < MA longue)

### Utilisation

1. Sélectionnez un actif (crypto ou action)
2. Choisissez la période de backtest (7, 30 ou 90 jours)
3. Ajustez les paramètres avec les curseurs
4. Cliquez sur "Exécuter le backtest"
5. Analysez les résultats

### Limitations

- Données cryptomonnaies uniquement (pas de clé API requise)
- Données actions simulées à partir des patterns BTC
- Maximum 90 jours (limite API Binance)
- Usage éducatif uniquement
