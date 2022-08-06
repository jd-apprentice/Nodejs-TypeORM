import { Source } from "../data-source";
import { Role } from "../entity/index";
import { CustomRepository } from "./custom-repository";

export class RoleRepository extends CustomRepository<Role> {
  constructor() {
    super(Role, Source.manager);
  }
}
