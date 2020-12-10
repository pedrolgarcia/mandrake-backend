import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => { return { hello: 'world' } })

Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')

Route.get('/users', 'UsersController.index').middleware('auth')
Route.post('/users/create', 'UsersController.create')
