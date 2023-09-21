import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Book, Order } from ".";

@Entity()
class OrderItems extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Book)
  @JoinColumn()
  book!: Book;

  @ManyToOne(() => Order)
  @JoinColumn()
  order!: Order;
}

export default OrderItems;
