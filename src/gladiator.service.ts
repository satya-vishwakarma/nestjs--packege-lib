import { Inject, Injectable } from "@nestjs/common";
import { GladiatorOptionsDto } from "./dto/gladiator-options";

@Injectable()
export class GladiatorService {
  constructor(
    @Inject("GLADIATOR_OPTIONS")
    private gladiatorOptions: GladiatorOptionsDto
  ) {}

  async IsUsingSword(): Promise<boolean> {
    return this.gladiatorOptions.weapon == "Sword";
  }
}
