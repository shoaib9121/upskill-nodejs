import { Entity, PrimaryGeneratedColumn, BaseEntity, JoinColumn, ManyToOne } from "typeorm";
import User from "./User";

@Entity()
class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user!: User;
}

export default Cart;
