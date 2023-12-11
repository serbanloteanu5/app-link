////
//// Filename: ComplexCode.js
//// Description: A complex code example demonstrating a customer management system
////

// Class definition for a Customer
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getTotalOrders() {
    return this.orders.length;
  }
}

// Class definition for an Order
class Order {
  constructor(id, orderDate, totalAmount) {
    this.id = id;
    this.orderDate = orderDate;
    this.totalAmount = totalAmount;
  }
}

// Class definition for a Customer Management System
class CustomerManagementSystem {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  getCustomerById(id) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        return this.customers[i];
      }
    }
    return null;
  }

  getTotalCustomers() {
    return this.customers.length;
  }
}

// Create an instance of the Customer Management System
const cms = new CustomerManagementSystem();

// Create some sample customers and orders
const customer1 = new Customer(1, "John Doe", "johndoe@example.com");
const customer2 = new Customer(2, "Jane Smith", "janesmith@example.com");
const customer3 = new Customer(3, "Michael Johnson", "michaeljohnson@example.com");

const order1 = new Order(1, new Date(), 100.0);
const order2 = new Order(2, new Date(), 150.0);
const order3 = new Order(3, new Date(), 200.0);

customer1.addOrder(order1);
customer2.addOrder(order2);
customer3.addOrder(order3);

// Add customers to the Customer Management System
cms.addCustomer(customer1);
cms.addCustomer(customer2);
cms.addCustomer(customer3);

// Get customer by ID
const customerId = 2;
const customerById = cms.getCustomerById(customerId);

if (customerById) {
  console.log("Customer found with ID:", customerId);
  console.log("Customer Name:", customerById.name);
  console.log("Customer Email:", customerById.email);
} else {
  console.log("Customer not found with ID:", customerId);
}

// Get total number of customers
const totalCustomers = cms.getTotalCustomers();
console.log("Total Customers:", totalCustomers);
console.log("================");

// Loop through all customers and display their details
for (let i = 0; i < totalCustomers; i++) {
  const customer = cms.customers[i];
  console.log("Customer ID:", customer.id);
  console.log("Customer Name:", customer.name);
  console.log("Customer Email:", customer.email);
  console.log("Total Orders:", customer.getTotalOrders());
  console.log("----------------");
}