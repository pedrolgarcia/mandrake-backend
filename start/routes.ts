import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.get('/', async () => { return { hello: 'world' } })
    Route.post('/login', 'AuthController.login')
    
    Route.group(() => {
        Route.resource('users', 'UsersController').apiOnly()
        Route.post('/logout', 'AuthController.logout')
    }).middleware(['auth'])
}).prefix('api/v1')

