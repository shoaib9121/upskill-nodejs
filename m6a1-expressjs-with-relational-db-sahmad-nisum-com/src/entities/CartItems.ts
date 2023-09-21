import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Book, Cart } from ".";

@Entity()
class CartItems extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Book)
  @JoinColumn()
  book!: Book;

  @ManyToOne(() => Cart)
  @JoinColumn()
  cart!: Cart;
}

export default CartItems;
