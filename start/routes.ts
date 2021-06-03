import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('login', 'AuthController.login')
    
    
    Route.group(() => {
        Route.resource('users', 'UsersController').apiOnly()
        Route.get('modules', 'MenuController.modules')
        Route.get('address', 'AddressesController.index')
        Route.post('logout', 'AuthController.logout')

        Route.group(() => {
            Route.resource('menu', 'MenuController').apiOnly()
        }).prefix('settings')

    }).middleware(['auth'])

}).prefix('api/v1')

