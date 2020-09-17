import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EatingWindow } from "../eating_window/eating_window.entity";
import { FoodToMealPlan } from "../food_to_meal_plan/food_to_meal_plan.entity";
import { FoodType } from "../food_type/food_type.entity";
import { HealthStatus } from "../health_status/health_status.entity";
import { NutritionType } from "../nutrition_type/nutrition_type.entity";

@Entity()
export class Food extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    name_si: string;

    @Column({ nullable: true })
    thumbnail: string;

    @Column({ nullable: true })
    image_url: string;

    @Column()
    serving_unit: string;

    @Column()
    serving_size: number;

    @Column()
    calories: number;

    @Column()
    protein: number;

    @Column()
    fat: number;

    @Column()
    carb: number;

    @Column()
    cost: number;

    @Column()
    is_budget: boolean;

    @ManyToOne(type => NutritionType, nutrition_type => nutrition_type.id, { eager: true })
    nutrition_type: NutritionType

    @ManyToOne(type => FoodType, food_type => food_type.id, { eager: true })
    food_type: FoodType

    @ManyToOne(type => EatingWindow, eating_window => eating_window.id, { eager: true })
    eating_window: EatingWindow

    @ManyToOne(type => HealthStatus, health_status => health_status.id, { eager: true })
    health_status: HealthStatus

    @OneToMany(type => FoodToMealPlan, food_to_meal_plan => food_to_meal_plan.id)
    food_to_meal_plan: FoodToMealPlan[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}