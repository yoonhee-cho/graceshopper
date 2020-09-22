const { db, Book, Author } = require('./server/db')
const test1;
const books = [
    {
        title: `Oxford International Primary Maths: Stage 4: Teacher's Guide 4`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841803-0',
        Pages: 256,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198418030.jpg',
        price: 31.99,
        qty: 10,

    },
    {
        title: `Oxford International Primary Maths: Stage 5: Teacher's Guide 5`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841805-4',
        Pages: 272,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198418054.jpg',
        price: 30.99,
        qty: 10,

    },


{
        title: `Oxford International Primary Maths: Stage 6: Teacher's Guide 6`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841807-8',
        Pages: 224,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198418078.jpg',
        price: 30.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Maths: Stage 1: Teacher's Guide 1`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841796-5',
        Pages: 232,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198417965.jpg',
        price: 30.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Maths: Stage 2: Teacher's Guide 2`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841799-6',
        Pages: 256,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198417996.jpg',
        price: 30.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Maths: Stage 3: Teacher's Guide 3`,
        shortdDescription: 'A problem solving approach to primary maths',
        category: 'Math',
        ISBN: '978-0-19-841801-6',
        Pages: 184,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198418016.jpg',
        price: 33.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Maths: Grade 4: Workbook 4`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Math',
        ISBN: '978-0-19-836529-7',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198365297.jpg',
        price: 7.99,
        qty: 10,

    },


    {
        title: `Oxford International Primary Maths: Grade 3: Workbook 3`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Math',
        ISBN: '978-0-19-836528-0',
        Pages: 88,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198365280.jpg',
        price: 7.99,
        qty: 10,

    },


    {
        title: `Oxford International Primary Maths: Grade 5: Workbook 5`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Math',
        ISBN: '978-0-19-836530-3',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198365303.jpg',
        price: 8.99,
        qty: 10,

    },


    {
        title: `Oxford International Primary Maths: Grade 1: Workbook 1`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Math',
        ISBN: '978-0-19-836526-6',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198365266.jpg',
        price: 6.99,
        qty: 10,

    },


    {
        title: `Oxford International Primary Science: Workbook 2`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837643-9',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376439.jpg',
        price: 6.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Workbook 4`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837645-3',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376453.jpg',
        price: 6.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Workbook 6`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837647-7',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376477.jpg',
        price: 7.50,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Workbook 5`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837646-0',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376460.jpg',
        price: 7.50,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Workbook 1`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837642-2',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376422.jpg',
        price: 6.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Workbook 3`,
        shortdDescription: 'additional practice materials for classroom or home study',
        category: 'Science',
        ISBN: '978-0-19-837644-6',
        Pages: 96,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198376446.jpg',
        price: 6.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Assessment`,
        shortdDescription: 'The complete test kit for Oxford International Primary Science',
        category: 'Science',
        ISBN: '978-0-19-836533-4',
        Pages: 500,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198365334.jpg',
        price: 71.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Digital Resource Pack 4`,
        shortdDescription: 'An enquiry-based approach to primary science',
        category: 'Science',
        ISBN: '978-0-19-839492-1',
        Pages: 500,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198394921.jpg',
        price: 112.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Digital Resource Pack 1`,
        shortdDescription: 'An enquiry-based approach to primary science',
        category: 'Science',
        ISBN: '978-0-19-839489-1',
        Pages: 500,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198394891.jpg',
        price: 112.99,
        qty: 10,

    },

    {
        title: `Oxford International Primary Science: Digital Resource Pack 2`,
        shortdDescription: 'An enquiry-based approach to primary science',
        category: 'Science',
        ISBN: '978-0-19-839490',
        Pages: 500,
        imageUrl: 'https://global.oup.com/education/covers/oxed/medium/9780198394907.jpg',
        price: 112.99,
        qty: 10,

    },


]

const authors = [
    {

    }
]

const seed = async () => {
    try {
        await db.sync({force: true});

        const booksArr = await Promise.all(
            books.map((book) => {
                return Book.create(book)
            })
        )



    } catch (error) {
        console.log(error)
    }
}

module.exports = seed;

if(require.main === module) {
    seed()
    .then(() => {
        console.log('Seeding Successful!')
        db.close()
    })
    .catch((err) => {
        console.log('Something went wrong!', err)
        db.close();
    })
}
