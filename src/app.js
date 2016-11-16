import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/boot';
import SplashState from './states/preload';
import GameState from './states/game';

class Game extends Phaser.Game {

  constructor () {
    let width = 800
    let height = 400

    super(width, height, Phaser.AUTO, 'game', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game();
