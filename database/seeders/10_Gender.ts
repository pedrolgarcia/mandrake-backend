import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Gender from 'App/Models/Main/Gender';

export default class GenderSeeder extends BaseSeeder {
  public async run () {
    await Gender.createMany([
      { name: 'Masculino' },
      { name: 'Feminino' }
    ]);
  }
}
