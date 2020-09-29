const db = require('./server/db/db')
const {Book, Author, User, Order, BookInOrder} = require('./server/db/models')

const books = [
  {
    title: `Oxford International Primary Maths: Stage 4: Teacher's Guide 4`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841803-0',
    Pages: 256,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198418030.jpg',
    price: 3199,
    qty: 10
  },
  {
    title: `Oxford International Primary Maths: Stage 5: Teacher's Guide 5`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841805-4',
    Pages: 272,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198418054.jpg',
    price: 3099,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Stage 6: Teacher's Guide 6`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841807-8',
    Pages: 224,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198418078.jpg',
    price: 3099,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Stage 1: Teacher's Guide 1`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841796-5',
    Pages: 232,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198417965.jpg',
    price: 3099,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Stage 2: Teacher's Guide 2`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841799-6',
    Pages: 256,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198417996.jpg',
    price: 3099,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Stage 3: Teacher's Guide 3`,
    shortDescription: 'A problem solving approach to primary maths',
    category: 'Math',
    ISBN: '978-0-19-841801-6',
    Pages: 184,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198418016.jpg',
    price: 3399,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Grade 4: Workbook 4`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Math',
    ISBN: '978-0-19-836529-7',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198365297.jpg',
    price: 799,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Grade 3: Workbook 3`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Math',
    ISBN: '978-0-19-836528-0',
    Pages: 88,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198365280.jpg',
    price: 799,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Grade 5: Workbook 5`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Math',
    ISBN: '978-0-19-836530-3',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198365303.jpg',
    price: 899,
    qty: 10
  },

  {
    title: `Oxford International Primary Maths: Grade 1: Workbook 1`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Math',
    ISBN: '978-0-19-836526-6',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198365266.jpg',
    price: 699,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 2`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837643-9',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376439.jpg',
    price: 699,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 4`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837645-3',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376453.jpg',
    price: 699,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 6`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837647-7',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376477.jpg',
    price: 75,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 5`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837646-0',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376460.jpg',
    price: 75,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 1`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837642-2',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376422.jpg',
    price: 699,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Workbook 3`,
    shortDescription:
      'additional practice materials for classroom or home study',
    category: 'Science',
    ISBN: '978-0-19-837644-6',
    Pages: 96,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198376446.jpg',
    price: 699,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Assessment`,
    shortDescription:
      'The complete test kit for Oxford International Primary Science',
    category: 'Science',
    ISBN: '978-0-19-836533-4',
    Pages: 500,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198365334.jpg',
    price: 7199,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Digital Resource Pack 4`,
    shortDescription: 'An enquiry-based approach to primary science',
    category: 'Science',
    ISBN: '978-0-19-839492-1',
    Pages: 500,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198394921.jpg',
    price: 11299,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Digital Resource Pack 1`,
    shortDescription: 'An enquiry-based approach to primary science',
    category: 'Science',
    ISBN: '978-0-19-839489-1',
    Pages: 500,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198394891.jpg',
    price: 11299,
    qty: 10
  },

  {
    title: `Oxford International Primary Science: Digital Resource Pack 2`,
    shortDescription: 'An enquiry-based approach to primary science',
    category: 'Science',
    ISBN: '978-0-19-839490',
    Pages: 500,
    imageUrl:
      'https://global.oup.com/education/covers/oxed/medium/9780198394907.jpg',
    price: 11299,
    qty: 10
  }
]

const authors = [
  {
    firstName: 'Terry',
    lastName: 'Hudson'
  },
  {
    firstName: 'Henry',
    lastName: 'Hudson'
  },
  {
    firstName: 'Judith',
    lastName: 'Amery'
  },
  {
    firstName: 'Larry',
    lastName: 'Hudson'
  },
  {
    firstName: 'Barry',
    lastName: 'Hudson'
  },
  {
    firstName: 'Gary',
    lastName: 'Hudson'
  },
  {
    firstName: 'Khalilah',
    lastName: 'Hudson'
  },
  {
    firstName: 'Harris',
    lastName: 'Hudson'
  },
  {
    firstName: 'Orlando',
    lastName: 'Hudson'
  },
  {
    firstName: 'Celine',
    lastName: 'Hudson'
  },
  {
    firstName: 'Mac',
    lastName: 'Hudson'
  },
  {
    firstName: 'Hedra',
    lastName: 'Hudson'
  },
  {
    firstName: 'Jess',
    lastName: 'Hudson'
  },
  {
    firstName: 'Melody',
    lastName: 'Hudson'
  },
  {
    firstName: 'Kathryn',
    lastName: 'Hudson'
  },
  {
    firstName: 'Yoon',
    lastName: 'Hudson'
  },
  {
    firstName: 'Sara',
    lastName: 'Hudson'
  },
  {
    firstName: 'Alison',
    lastName: 'Hudson'
  },
  {
    firstName: 'Elle',
    lastName: 'Hudson'
  },
  {
    firstName: 'Mary',
    lastName: 'Hudson'
  }
]

const users = [
  {
    email: '123@gmail.com',
    password: '123456',
    salt: '1233456',
    address: '123 Main Street, New York, NY 10004'
  },
  {
    email: '321@gmail.com',
    password: '123456',
    salt: '1233456',
    address: '321 Main Street, New York, NY 10004'
  },
  {
    email: 'ryan@gmail.com',
    password: '111111',
    salt: '123456',
    address: '435 East 14th Street, New York, NY 10009'
  },
  {
    email: 'thomas@gmail.com',
    password: '111111',
    salt: '123456',
    address: '316 West 30th Street, New York, NY 10001'
  },
  {
    email: 'julie@gmail.com',
    password: '123456',
    salt: '123456',
    address: '405 Broadway 17H, New York, NY 10001'
  },
  {
    email: 'lydia@gmail.com',
    password: '123456',
    salt: '123456',
    address: '439 bloom street, New York, NY 10015'
  },
  {
    email: 'claudia@gmail.com',
    password: '123456',
    salt: '123456',
    address: '4739 hello street, Brookyln, NY 10015'
  },
  {
    email: 'jaqueline@gmail.com',
    password: '123456',
    salt: '123456',
    address: '504 main street, New York, NY 10015'
  },
  {
    email: 'simona@gmail.com',
    password: '123456',
    salt: '123456',
    address: '1003 hanover street, New York, NY 10015'
  },
  {
    email: 'samuel@gmail.com',
    password: '123456',
    salt: '123456',
    address: '415 13th street, New York, NY 10009'
  },
  {
    email: 'philip@gmail.com',
    password: '123456',
    salt: '123456',
    address: '435 E 14th street, New York, NY 10009'
  },
  {
    email: 'alexis@gmail.com',
    password: '123456',
    salt: '123456',
    address: '115 W 83th street, New York, NY 10006'
  },
  {
    email: 'joanna@gmail.com',
    password: '123456',
    salt: '123456',
    address: '111 E 28th street, New York, NY 10006'
  },
  {
    email: 'lanZhang@gmail.com',
    password: '123456',
    salt: '123456',
    address: '324 W 27th street, New York, NY 10006'
  },
  {
    email: 'casey@gmail.com',
    password: '123456',
    salt: '123456',
    address: '324 W 27th street, New York, NY 10006'
  },

  {
    email: 'admin@gmail.com',
    password: '123456',
    salt: '1233456',
    address: '111 homeOffice, New York, NY 10004',
    isAdmin: true
  }
]

const orders = [
  {
    status: 'in progress'
  },

  {
    status: 'in progress'
  }
]

const booksInOrder = [
  {
    quantity: 3,
    totalPrice: 9297
  },

  {
    quantity: 4,
    totalPrice: 12396
  }
]

// eslint-disable-next-line max-statements
const seed = async () => {
  try {
    await db.sync({force: true})

    const booksArr = await Promise.all(
      books.map(book => {
        return Book.create(book)
      })
    )

    const authorsArr = await Promise.all(
      authors.map(author => {
        return Author.create(author)
      })
    )

    const usersArr = await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    const ordersArr = await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )

    const booksInOrderArr = await Promise.all(
      booksInOrder.map(book => {
        return BookInOrder.create(book)
      })
    )

    // const reviewsArr = await Promise.all(
    //     reviews.map((review)=>{
    //         return Review.create(review)
    //     })
    // )

    const book1 = booksArr[0]
    const author1 = authorsArr[0]

    await book1.addAuthors(author1)

    const book2 = booksArr[1]
    const author2 = authorsArr[1]

    await book2.addAuthors(author2)

    const book3 = booksArr[2]
    const author3 = authorsArr[2]

    await book3.addAuthors(author3)

    const book4 = booksArr[3]
    const author4 = authorsArr[3]

    await book4.addAuthors([author4, author3])

    const user1 = usersArr[0]
    const user2 = usersArr[1]

    const order1 = ordersArr[0]
    const order2 = ordersArr[1]

    await user1.addOrders(order1)
    await user2.addOrders(order2)

    const bookInOrder1 = booksInOrderArr[0]
    const bookInOrder2 = booksInOrderArr[1]

    // await book4.addBookInOrder(bookInOrder1)
    // await book3.addBookInOrder(bookInOrder2)

    await bookInOrder1.setBook(book4)
    await bookInOrder2.setBook(book3)

    await bookInOrder1.setOrder(order1)
    await bookInOrder2.setOrder(order2)

    // await user1.addBooks(book1)
    // await user2.addBooks([book1, book2, book3, book4])

    // setBooks will overwrite
    // await user2.setBooks([book3, book4])

    // booksArr.map(async (book,idx)=>{
    //     try {
    //         console.log(Object.keys(Book.prototype));
    //    await book.addAuthor(authorsArr[idx]);
    //     } catch( error ) {
    //         console.log(error)
    //     }

    // })

    // reviewsArr.forEach((review,idx)=>{

    //     review.setUsers(usersArr[idx].id);

    // })
  } catch (error) {
    console.log(error)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding Successful!')
      db.close()
    })
    .catch(err => {
      console.log('Something went wrong!', err)
      db.close()
    })
}
