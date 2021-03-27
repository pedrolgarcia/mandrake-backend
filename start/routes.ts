import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.post('login', 'AuthController.login')
    
    
    Route.group(() => {
        // /
        Route.resource('users', 'UsersController').apiOnly()
        Route.get('modules', 'MenuController.modules')
        Route.post('logout', 'AuthController.logout')

        // /settings
        Route.group(() => {
            Route.resource('menu', 'MenuController').apiOnly()
        }).prefix('settings')

    }).middleware(['auth', 'acl:user'])

}).prefix('api/v1')

