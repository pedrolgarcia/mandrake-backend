import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Main/Country';

import countries from '../data/countries.json';

export default class CountrySeeder extends BaseSeeder {
  public async run () {
    await Country.createMany(countries.map((country) => ({...country})));
  }
}
