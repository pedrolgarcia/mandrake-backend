import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Main/Country';
import State from 'App/Models/Main/State';

import states from '../data/states.json';

export default class StateSeeder extends BaseSeeder {
  public async run () {
    const country = await Country.findBy('name', 'Brasil');
    await State.createMany(states.map((state) => ({...state, countryId: country?.id })));
  }
}
