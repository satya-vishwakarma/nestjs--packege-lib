import { DynamicModule, Module } from "@nestjs/common";

import { GladiatorOptionsDto } from "./dto/gladiator-options";
import { GladiatorService } from "./gladiator.service";

@Module({})
export class GladiatorModule {
  static register(options: GladiatorOptionsDto): DynamicModule {
    return {
      module: GladiatorModule,
      providers: [
        {
          provide: "GLADIATOR_OPTIONS",
          useValue: options,
        },
        GladiatorService,
      ],
      exports: [GladiatorService],
    };
  }
}
