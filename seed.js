const { db, Book, Author } = require('./server/db')

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

    

    
    


    

]

const authors = [
    {

    }
]

const seed = async () => {
    try {
        await db.sync({force: true});

        const 
    
        
        
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