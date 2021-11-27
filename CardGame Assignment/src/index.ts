
import './css/main.scss';
import { Application, Ticker } from 'pixi.js';

import { Game } from './ts/activityInGame';

window.onload = () => {
  const app = new Application({
    width: 1400,
    height: 1200,
    backgroundColor: 0x00003B,
    sharedTicker: true,
    sharedLoader: true,
  });

  document.body.appendChild(app.view);

  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));
};
