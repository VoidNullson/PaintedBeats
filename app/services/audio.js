import Service from '@ember/service';
import { Howl } from 'howler';
import { action } from '@ember/object';

export default class AudioService extends Service {
  constructor() {
    super(...arguments);

    this.howl = new Howl({
      src: ['/samples.mp3'],
      sprite: {
        cowbell: [0, 300],
        conga_hi: [400, 300],
        cymbal: [807, 3640],
        conga_mid: [4455, 202],
        conga_low: [4863, 343],
        hihat_Op: [5268, 706],
        tom_hi: [6277, 206],
        maracas: [6684, 53],
        tom_mid: [7092, 263],
        hihat_Cl: [7496, 90],
        tom_low: [7903, 370],
        clave: [8307, 44],
        clap: [8712, 208],
        snare: [9116, 137],
        rim: [9521, 36],
        kick: [9929, 390]
      }
    });
  }

get sounds(){
  return Object.keys(this.howl._sprite);
}

  @action
  playSound(sound){
    this.howl.play(sound);
  }
  playNotes(notes){
    notes.forEach(note => {
    let soundId = this.howl.play(note.sound);
    this.howl.volume(0.1, notes.volume);

  });
  }
}
