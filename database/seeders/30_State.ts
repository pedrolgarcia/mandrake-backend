import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Main/Country';
import State from 'App/Models/Main/State';

export default class StateSeeder extends BaseSeeder {
  public async run () {
    const country = await Country.findBy('name', 'Brasil');
    await State.createMany(states.map((state) => ({...state, countryId: country?.id })));
  }
}

const states = [
	{
		"name": "Acre",
		"iso": "AC"
	},
	{
		"name": "Alagoas",
		"iso": "AL"
	},
	{
		"name": "Amapá",
		"iso": "AP"
	},
	{
		"name": "Amazonas",
		"iso": "AM"
	},
	{
		"name": "Bahia",
		"iso": "BA"
	},
	{
		"name": "Ceará",
		"iso": "CE"
	},
	{
		"name": "Distrito Federal",
		"iso": "DF"
	},
	{
		"name": "Espírito Santo",
		"iso": "ES"
	},
	{
		"name": "Goiás",
		"iso": "GO"
	},
	{
		"name": "Maranhão",
		"iso": "MA"
	},
	{
		"name": "Mato Grosso",
		"iso": "MT"
	},
	{
		"name": "Mato Grosso do Sul",
		"iso": "MS"
	},
	{
		"name": "Minas Gerais",
		"iso": "MG"
	},
	{
		"name": "Pará",
		"iso": "PA"
	},
	{
		"name": "Paraíba",
		"iso": "PB"
	},
	{
		"name": "Paraná",
		"iso": "PR"
	},
	{
		"name": "Pernambuco",
		"iso": "PE"
	},
	{
		"name": "Piauí",
		"iso": "PI"
	},
	{
		"name": "Rio de Janeiro",
		"iso": "RJ"
	},
	{
		"name": "Rio Grande do Norte",
		"iso": "RN"
	},
	{
		"name": "Rio Grande do Sul",
		"iso": "RS"
	},
	{
		"name": "Rondônia",
		"iso": "RO"
	},
	{
		"name": "Roraima",
		"iso": "RR"
	},
	{
		"name": "Santa Catarina",
		"iso": "SC"
	},
	{
		"name": "São Paulo",
		"iso": "SP"
	},
	{
		"name": "Sergipe",
		"iso": "SE"
	},
	{
		"name": "Tocantins",
		"iso": "TO"
	}
]
