

## Setep 1 . 

     GladiatorModule.register({
          weapon: 'Sword',
        }),

## Setep 2 . 

In App service 

    constructor(private readonly gladiatorService: GladiatorService) {}
       async getHello() {
        return await this.gladiatorService.IsUsingSword()
      }

