
npm install  
npm run build



npm i PATH_TO_OUR_PACKAGE




## Setep 1 . 

     GladiatorModule.register({
          weapon: 'Sword',
        }),

## Setep 2 . 


    constructor(private readonly gladiatorService: GladiatorService) {}
       async getHello() {
        return await this.gladiatorService.IsUsingSword()
      }

