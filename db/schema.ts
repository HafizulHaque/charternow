import { pgTable, serial, text, integer, timestamp, check, decimal } from 'drizzle-orm/pg-core';
// import { geography } from "drizzle-orm-postgis";
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  phone: text("phone"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date())
});

export const hosts = pgTable("hosts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  phone: text("phone"),
  baseLocation: text("base_location").notNull(),
  serviceRadius: integer("service_radius").default(50).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vehicles = pgTable("vehicles", {
  id: serial("id").primaryKey(),
  hostId: integer("host_id").notNull().references(() => hosts.id),
  type: text("type").notNull(),
  model: text("model").notNull(),
  seatCount: integer("seat_count").notNull(),
  rentPerDay: decimal("rent_per_day", { precision: 10, scale: 2 }).notNull(),
  baseLocation: text("base_location").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vehiclePhotos = pgTable("vehicle_photos", {
  id: serial("id").primaryKey(),
  vehicleId: integer("vehicle_id").notNull().references(() => vehicles.id),
  photoUrl: text("photo_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  vehicleId: integer("vehicle_id").notNull().references(() => vehicles.id),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  status: text("status")
    .notNull()
    // .checkIn(["pending", "confirmed", "canceled"])
    .default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  latitude: decimal("latitude", { precision: 9, scale: 6 }).notNull(),
  longitude: decimal("longitude", { precision: 9, scale: 6 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});



